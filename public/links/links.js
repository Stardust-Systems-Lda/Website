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
  if (contact instanceof HTMLDetailsElement) {
    contact.open = true;
    contact.scrollIntoView({ block: 'start' });
  }
}
openContact();
window.addEventListener('hashchange', openContact);

const fallback = document.getElementById('share-fallback');
const fallbackInput = document.getElementById('share-url');
let previousShareButton;
document.getElementById('close-share').addEventListener('click', () => {
  fallback.hidden = true;
  previousShareButton?.focus();
});

for (const button of document.querySelectorAll('[data-share]')) {
  button.hidden = false;
  button.addEventListener('click', async () => {
    previousShareButton = button;
    status.textContent = '';
    const id = button.dataset.share;
    const url = new URL('/links/', window.location.origin);
    if (id) url.hash = id;
    const personName = id ? document.getElementById(id)?.querySelector('.person-name')?.textContent : '';
    try {
      await navigator.clipboard.writeText(url.href);
      status.textContent = personName ? `Link de ${personName} copiado.` : 'Link da página copiado.';
      const label = button.querySelector('span');
      if (label) {
        label.textContent = 'Link copiado';
        setTimeout(() => { label.textContent = 'Copiar link'; }, 2500);
      }
    } catch {
      fallback.hidden = false;
      fallbackInput.value = url.href;
      fallbackInput.focus();
      fallbackInput.select();
    }
  });
}
