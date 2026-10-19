const status = document.getElementById('status');
const themeButton = document.getElementById('theme-toggle');
const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)');
const storageKey = 'renovar-theme';

function preference() {
  try { return localStorage.getItem(storageKey); } catch { return null; }
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#071322' : '#ffffff';
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
  themeButton.title = themeButton.getAttribute('aria-label');
}

let chosenTheme = preference();
function followDevice() {
  setTheme(chosenTheme === 'light' || chosenTheme === 'dark' ? chosenTheme : deviceTheme.matches ? 'dark' : 'light');
}
followDevice();
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  chosenTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(chosenTheme);
  try { localStorage.setItem(storageKey, chosenTheme); } catch { /* Keep choice for this visit. */ }
});
deviceTheme.addEventListener('change', followDevice);
window.addEventListener('storage', (event) => {
  if (event.key === storageKey || event.key === null) {
    chosenTheme = preference();
    followDevice();
  }
});

function openContact() {
  const id = window.location.hash.slice(1);
  const contact = document.getElementById(id);
  if (contact instanceof HTMLElement && contact.classList.contains('person')) {
    const details = contact.querySelector('details');
    if (details) details.open = true;
    contact.scrollIntoView({ block: 'start' });
  }
}
openContact();
window.addEventListener('hashchange', openContact);

const fallback = document.getElementById('share-fallback');
const fallbackInput = document.getElementById('share-url');
let previousShareButton;
let sharing = false;
document.getElementById('close-share').addEventListener('click', () => {
  fallback.hidden = true;
  previousShareButton?.focus();
});

// Load the matching helper before showing buttons; clicks keep user activation.
import(`./share.js${new URL(import.meta.url).search}`).then(({ shareLink }) => {
  for (const button of document.querySelectorAll('[data-share]')) {
    button.hidden = false;
    button.addEventListener('click', async () => {
      if (sharing) return;
      previousShareButton = button;
      fallback.hidden = true;
      status.textContent = '';
      const id = button.dataset.share;
      const url = new URL('/links/', window.location.origin);
      if (id) url.hash = id;
      const personName = id ? document.getElementById(id)?.querySelector('.person-name')?.textContent : '';
      const title = personName ? `${personName} — RenovAR` : 'RenovAR — Links e contactos';
      sharing = true;
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      const result = await shareLink({ title, url: url.href });
      sharing = false;
      button.disabled = false;
      button.removeAttribute('aria-busy');
      if (result === 'unavailable') {
        status.textContent = 'A partilha do dispositivo não está disponível neste navegador.';
        fallback.hidden = false;
        fallbackInput.value = url.href;
        fallbackInput.focus();
        fallbackInput.select();
      }
    });
  }
}).catch(() => {
  status.textContent = 'Use a opção de partilha do navegador.';
});
