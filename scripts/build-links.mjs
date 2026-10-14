import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[c]);
const vText = (value) => String(value).replace(/\\/g, '\\\\')
  .replace(/\r\n|\r|\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');

// vCard 3.0 uses CRLF and folds at 75 octets, without splitting UTF-8 characters.
export function foldLine(line) {
  let result = '', current = '', bytes = 0;
  for (const character of line) {
    const length = Buffer.byteLength(character);
    if (bytes + length > 75) {
      result += `${current}\r\n`;
      current = ' ';
      bytes = 1;
    }
    current += character;
    bytes += length;
  }
  return result + current;
}

export function vcard(person, site) {
  return [
    'BEGIN:VCARD', 'VERSION:3.0',
    `N:${vText(person.apelido)};${vText(person.primeiroNome)};;;`,
    `FN:${vText(person.nome)}`, 'ORG:RenovAR',
    `TITLE:${vText(person.funcao)}`, `EMAIL;TYPE=INTERNET,WORK:${person.email}`,
    `TEL;TYPE=CELL:${person.telefone.replace(/\s/g, '')}`,
    `URL:${site}/links/#${person.id}`, 'END:VCARD',
  ].map(foldLine).join('\r\n') + '\r\n';
}

export function validate(data) {
  const site = new URL(data.site);
  if (site.protocol !== 'https:' || site.origin !== data.site) throw Error('site deve ser uma origem HTTPS sem barra final.');
  const ids = new Set();
  const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
  if (!emailPattern.test(data.email)) throw Error('Email geral inválido.');
  for (const person of data.pessoas) {
    if (!/^[a-z][a-z0-9-]*$/.test(person.id) || ids.has(person.id)) throw Error('Identificador de contacto inválido ou repetido.');
    ids.add(person.id);
    for (const key of ['nome', 'primeiroNome', 'apelido', 'funcao']) {
      if (typeof person[key] !== 'string' || !person[key].trim()) throw Error(`Falta ${key}.`);
    }
    if (!emailPattern.test(person.email) || !/^\+\d[\d ]{6,20}$/.test(person.telefone)) throw Error('Contacto inválido.');
  }
  for (const item of [...data.redes, ...data.recursos]) {
    if (!item.label?.trim() || new URL(item.url).protocol !== 'https:') throw Error('Cada ligação precisa de um nome e URL HTTPS.');
  }
}

const paths = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4"/>',
  phone: '<path d="m5 3 4 1 1 5-3 2a15 15 0 0 0 6 6l2-3 5 1 1 4c-1 4-8 2-13-3S1 4 5 3Z"/>',
  share: '<path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/>',
  chevron: '<path d="m7 10 5 5 5-5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
};
const icon = (name, className = '') => `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
const optionalSection = (title, items) => items.length ? `<section class="additional-section" aria-label="${title}"><h2>${title}</h2><div class="additional-links">${items.map(item => `<a href="${escapeHtml(item.url)}" rel="noopener noreferrer">${escapeHtml(item.label)}${icon('arrow')}</a>`).join('')}</div></section>` : '';

export function render(data) {
  validate(data);
  const pilot = `mailto:${data.email}?subject=${encodeURIComponent('Interesse num piloto RenovAR')}`;
  return `<!doctype html>
<html lang="pt-PT">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#ffffff">
  <title>RenovAR | Links e contactos</title>
  <meta name="description" content="Conheça a RenovAR, fale connosco sobre um piloto e guarde os contactos da nossa equipa.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_PT">
  <meta property="og:title" content="RenovAR | Vamos pôr o ar em movimento.">
  <meta property="og:description" content="O site, as ligações úteis e os contactos da equipa RenovAR, num só lugar.">
  <meta property="og:url" content="${data.site}/links/">
  <meta property="og:image" content="${data.site}/assets/renovar-assinatura.png">
  <link rel="canonical" href="${data.site}/links/">
  <link rel="icon" href="/favicon.ico">
  <link rel="preload" href="/assets/fonts/Montserrat-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/Montserrat-Bold.woff2" as="font" type="font/woff2" crossorigin>
  <script src="/theme.js"></script>
  <link rel="stylesheet" href="/links/links.css">
  <script src="/links/links.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#conteudo">Saltar para o conteúdo</a>
  <div class="page-shell">
    <header class="page-header">
      <a class="brand" href="/" aria-label="RenovAR — visitar o site">
        <img class="brand-light" src="/assets/renovar-simbolo.png" alt="" width="56" height="56">
        <img class="brand-dark" src="/assets/renovar-simbolo-branco.png" alt="" width="56" height="56">
      </a>
      <div class="header-actions">
        <button class="icon-button" id="theme-toggle" type="button" aria-label="Alternar aparência" hidden>${icon('sun')}</button>
        <button class="icon-button" data-share="" type="button" aria-label="Copiar link da página" hidden>${icon('share')}</button>
      </div>
    </header>
    <main id="conteudo">
      <section class="intro" aria-labelledby="page-title">
        <p class="eyebrow"><span></span> RENOVAR SYSTEMS</p>
        <h1 id="page-title">Vamos pôr o ar<br>em <em>movimento.</em></h1>
        <p class="intro-copy">Qualidade do ar e ventilação inteligente.<br>Conheça o projeto. Fale com quem o constrói.</p>
      </section>
      <nav class="main-links" aria-label="Ligações RenovAR">
        <a class="link-tile primary" href="${escapeHtml(pilot)}">
          <span class="tile-icon">${icon('arrow')}</span>
          <span><strong>Vamos avaliar um piloto?</strong><small>O próximo passo pode ser no seu edifício.</small></span>
          ${icon('arrow', 'trailing')}
        </a>
        <a class="link-tile" href="/">
          <span class="tile-icon">${icon('globe')}</span>
          <span><strong>Conhecer a RenovAR</strong><small>Visite o nosso site e descubra a solução.</small></span>
          ${icon('arrow', 'trailing')}
        </a>
        <a class="link-tile" href="mailto:${escapeHtml(data.email)}">
          <span class="tile-icon">${icon('mail')}</span>
          <span><strong>Falar com a equipa</strong><small>${escapeHtml(data.email)}</small></span>
          ${icon('arrow', 'trailing')}
        </a>
      </nav>
      <section class="team-section" aria-labelledby="team-title">
        <div class="section-heading"><h2 id="team-title">Uma equipa. Contacto direto.</h2><span>OS FUNDADORES</span></div>
        <p class="section-copy">Escolha uma pessoa para falar ou guardar o contacto.</p>
        <div class="team-list">
${data.pessoas.map(person => `          <details class="person" id="${person.id}">
            <summary>
              <span class="initials" aria-hidden="true">${escapeHtml(person.primeiroNome[0] + person.apelido[0])}</span>
              <span class="person-heading"><span class="person-name">${escapeHtml(person.nome)}</span><span class="person-role">${escapeHtml(person.funcao)}</span></span>
              ${icon('chevron', 'person-chevron')}
            </summary>
            <div class="person-content">
              <a class="contact-line" href="mailto:${escapeHtml(person.email)}">${icon('mail')}<span>${escapeHtml(person.email)}</span></a>
              <a class="contact-line" href="tel:${person.telefone.replace(/\s/g, '')}">${icon('phone')}<span>${escapeHtml(person.telefone)}</span></a>
              <div class="person-actions">
                <a class="save-contact" href="/links/contactos/${person.id}.vcf" download="${person.primeiroNome}_RenovAR.vcf" aria-label="Guardar contacto de ${escapeHtml(person.nome)}">${icon('download')} Guardar contacto</a>
                <button class="share-contact" type="button" data-share="${person.id}" aria-label="Copiar link de ${escapeHtml(person.nome)}" hidden>${icon('share')}<span>Copiar link</span></button>
              </div>
              <p class="contact-help">Abra o ficheiro no telemóvel e confirme a adição aos contactos.</p>
            </div>
          </details>`).join('\n')}
        </div>
      </section>
${optionalSection('Acompanhe a RenovAR', data.redes)}
${optionalSection('Mais sobre o projeto', data.recursos)}
      <div class="share-fallback" id="share-fallback" hidden><label for="share-url">Copie este link para partilhar:</label><input id="share-url" type="url" readonly><button type="button" id="close-share">Fechar</button></div>
      <p class="status" id="status" role="status" aria-live="polite"></p>
    </main>
    <footer class="page-footer"><span>Do ar à ação.</span><a href="/">renovar-systems.com ${icon('arrow')}</a></footer>
  </div>
</body>
</html>
`;
}

export async function buildLinks() {
  const data = JSON.parse(await readFile(join(root, 'src/data/links.json'), 'utf8'));
  const html = render(data);
  await mkdir(join(root, 'public/links/contactos'), { recursive: true });
  await writeFile(join(root, 'public/links/index.html'), html);
  for (const person of data.pessoas) {
    await writeFile(join(root, `public/links/contactos/${person.id}.vcf`), vcard(person, data.site));
  }
  console.log(`Página /links/ e ${data.pessoas.length} contactos atualizados.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await buildLinks();
