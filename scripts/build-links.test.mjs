import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { render, vcard } from './build-links.mjs';

const data = JSON.parse(await readFile(new URL('../src/data/links.json', import.meta.url), 'utf8'));

test('vCards preserve Portuguese names, phone and email with portable CRLF lines', () => {
  for (const person of data.pessoas) {
    const card = vcard(person, data.site);
    assert.equal(card, card.replace(/\r?\n/g, '\r\n'));
    const unfolded = card.replace(/\r\n /g, '');
    assert.ok(unfolded.includes(`FN:${person.nome}\r\n`));
    assert.ok(unfolded.includes(`TEL;TYPE=CELL:${person.telefone.replace(/\s/g, '')}\r\n`));
    assert.ok(unfolded.includes(`EMAIL;TYPE=INTERNET,WORK:${person.email}\r\n`));
    assert.ok(unfolded.endsWith('END:VCARD\r\n'));
  }
});

test('long Unicode values fold by octets and reserved vCard separators are escaped', () => {
  const person = { ...data.pessoas[1], funcao: 'Direção; investigação, operação\\equipa\n' + 'çã'.repeat(90) };
  const card = vcard(person, data.site);
  assert.ok(card.split('\r\n').every(line => Buffer.byteLength(line) <= 75));
  assert.ok(!card.includes('\ufffd'));
  assert.ok(card.replace(/\r\n /g, '').includes('TITLE:Direção\\; investigação\\, operação\\\\equipa\\n'));
});

test('contact links remain usable without JavaScript; empty optional sections stay hidden', () => {
  const html = render(data);
  assert.ok(html.includes('href="/"'));
  const navigation = html.match(/<nav class="main-links"[^>]*>([\s\S]*?)<\/nav>/)[1];
  assert.equal((navigation.match(/href="mailto:/g) ?? []).length, 1);
  for (const person of data.pessoas) {
    assert.ok(html.includes(`id="${person.id}"`));
    assert.ok(html.includes(`href="/links/contactos/${person.id}.vcf"`));
    assert.ok(html.includes(`href="mailto:${person.email}"`));
  }
  assert.ok(!html.includes('Redes sociais'));
  assert.ok(!html.includes('Outros links'));
});

test('future links render safely and invalid protocols/duplicate people fail before writing', () => {
  const configured = { ...data, redes: [{ label: 'Rede <oficial>', url: 'https://example.com/?a=1&b=2' }] };
  const html = render(configured);
  assert.ok(html.includes('Rede &lt;oficial&gt;'));
  assert.ok(html.includes('https://example.com/?a=1&amp;b=2'));
  assert.throws(() => render({ ...configured, redes: [{ label: 'X', url: 'javascript:alert(1)' }] }));
  assert.throws(() => render({ ...data, pessoas: [data.pessoas[0], data.pessoas[0]] }));
});
