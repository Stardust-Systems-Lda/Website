import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { messages, resolveLanguage, translate, sharingUrl } from '../public/links/i18n.js';
import { render } from './build-links.mjs';

const data = JSON.parse(await readFile(new URL('../src/data/links.json', import.meta.url), 'utf8'));
const css = await readFile(new URL('../public/links/links.css', import.meta.url), 'utf8');

test('all four languages cover every visible/accessibility key and preserve contact names', () => {
  const keys = Object.keys(messages.pt).sort();
  for (const language of Object.keys(messages)) {
    assert.deepEqual(Object.keys(messages[language]).sort(), keys);
    for (const key of keys) assert.ok(messages[language][key].trim(), `${language}.${key}`);
    assert.ok(translate(language, 'saveContactLabel', { name: 'Gabriel Conceição' }).includes('Gabriel Conceição'));
    assert.ok(!translate(language, 'shareContactLabel', { name: 'Afonso Mota' }).includes('{name}'));
  }
  const html = render(data);
  for (const [, key] of html.matchAll(/data-i18n(?:-aria)?="([^"]+)"/g)) {
    for (const language of Object.keys(messages)) assert.equal(typeof messages[language][key], 'string');
  }
  assert.deepEqual([...html.matchAll(/data-language="([^"]+)"/g)].map(match => match[1]), ['pt', 'en', 'fr', 'es']);
});

test('explicit shared language overrides preferences; invalid values safely fall back', () => {
  assert.equal(resolveLanguage('fr', 'es'), 'fr');
  assert.equal(resolveLanguage('EN', 'pt'), 'en');
  assert.equal(resolveLanguage(null, 'es'), 'es');
  assert.equal(resolveLanguage('unsupported', 'en'), 'en');
  assert.equal(resolveLanguage('__proto__', 'constructor'), 'pt');
});

test('shared pages and contacts retain the chosen language on another device', () => {
  for (const language of Object.keys(messages)) {
    const url = sharingUrl('https://renovar-systems.com', language, 'gabriel');
    assert.equal(url.pathname, '/links/');
    assert.equal(url.hash, '#gabriel');
    assert.equal(resolveLanguage(url.searchParams.get('lang'), 'pt'), language);
  }
});

// Reference: RenovAR graphic manual v3.1, pages 17, 18 and 20.
const approved = new Set(['#FFFFFF', '#002262', '#00184A', '#0571D0', '#0F8DE1', '#0EBDE4', '#5B6D8C', '#14202B', '#EAF4F7', '#20C3E7', '#BDEFF7']);
const variables = block => Object.fromEntries([...block.matchAll(/(--[\w-]+):\s*(#[\da-f]{6})/gi)].map(([, key, value]) => [key, value]));
const light = variables(css.match(/:root\s*\{([\s\S]*?)\}/)[1]);
const dark = { ...light, ...variables(css.match(/:root\[data-theme='dark'\]\s*\{([\s\S]*?)\}/)[1]) };
function luminance(hex) {
  const rgb = hex.slice(1).match(/../g).map(value => parseInt(value, 16) / 255)
    .map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
}
function contrast(a, b) {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + .05) / (values[1] + .05);
}

test('both themes use approved brand colours', () => {
  for (const [colour] of css.matchAll(/#[\da-f]{6}\b/gi)) assert.ok(approved.has(colour.toUpperCase()), colour);
  assert.equal(dark['--surface'].toUpperCase(), '#00184A');
  assert.equal(dark['--panel'].toUpperCase(), '#002262');
});

test('normal text meets 4.5:1 and control/icon boundaries meet 3:1 in both themes', () => {
  for (const [theme, palette] of Object.entries({ light, dark })) {
    for (const [foreground, background] of [
      ['--heading', '--surface'], ['--text', '--surface'], ['--muted', '--surface'],
      ['--heading', '--panel'], ['--muted', '--panel'], ['--heading', '--hover'],
      ['--accent', '--surface'], ['--primary-text', '--primary'], ['--primary-text', '--primary-hover'],
    ]) assert.ok(contrast(palette[foreground], palette[background]) >= 4.5, `${theme}: ${foreground}/${background}`);
    for (const [foreground, background] of [
      ['--accent', '--panel'], ['--accent', '--hover'], ['--control-line', '--surface'], ['--control-line', '--panel'],
    ]) assert.ok(contrast(palette[foreground], palette[background]) >= 3, `${theme}: ${foreground}/${background}`);
  }
});
