const status = document.getElementById('status');
const assetVersion = new URL(import.meta.url).search;

import(`./i18n.js${assetVersion}`).then(startPage).catch(() => {
  status.textContent = 'Não foi possível carregar os idiomas. Atualize a página.';
});

function startPage({ messages, resolveLanguage, translate, sharingUrl }) {
  const themeButton = document.getElementById('theme-toggle');
  const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const themeKey = 'renovar-theme';
  const languageKey = 'renovar-language';
  const languagePicker = document.getElementById('language-picker');
  const languageToggle = document.getElementById('language-toggle');
  const fallback = document.getElementById('share-fallback');
  const fallbackInput = document.getElementById('share-url');
  let previousShareButton;
  let sharing = false;

  function preference(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  let language = resolveLanguage(new URL(location.href).searchParams.get('lang'), preference(languageKey));
  let chosenTheme = preference(themeKey);
  const text = (key, values) => translate(language, key, values);

  function setStatus(key) {
    status.dataset.messageKey = key || '';
    status.textContent = key ? text(key) : '';
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#00184A' : '#FFFFFF';
    const label = text(theme === 'dark' ? 'themeLight' : 'themeDark');
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
  }

  function followDevice() {
    setTheme(chosenTheme === 'light' || chosenTheme === 'dark' ? chosenTheme : deviceTheme.matches ? 'dark' : 'light');
  }

  function applyLanguage(next, { persist = false, updateUrl = false } = {}) {
    language = resolveLanguage(next);
    document.documentElement.lang = messages[language].tag;
    document.title = text('documentTitle');
    for (const node of document.querySelectorAll('[data-i18n]')) {
      node.textContent = text(node.dataset.i18n);
    }
    for (const node of document.querySelectorAll('[data-i18n-aria]')) {
      node.setAttribute('aria-label', text(node.dataset.i18nAria, { name: node.dataset.i18nName }));
    }
    document.querySelector('meta[name="description"]').content = text('description');
    document.querySelector('meta[property="og:title"]').content = text('documentTitle');
    document.querySelector('meta[property="og:description"]').content = text('description');
    document.querySelector('meta[property="og:locale"]').content = messages[language].locale;
    document.querySelector('meta[property="og:url"]').content = sharingUrl(location.origin, language).href;
    document.getElementById('language-code').textContent = language.toUpperCase();
    const label = text('languageCurrent', { language: messages[language].name });
    languageToggle.setAttribute('aria-label', label);
    languageToggle.title = label;
    for (const button of languagePicker.querySelectorAll('[data-language]')) {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    }
    if (status.dataset.messageKey) setStatus(status.dataset.messageKey);
    followDevice();
    if (persist) {
      try { localStorage.setItem(languageKey, language); } catch { /* Keep the choice for this visit. */ }
    }
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set('lang', language);
      history.replaceState(history.state, '', url);
    }
  }

  applyLanguage(language);
  languagePicker.hidden = false;
  themeButton.hidden = false;

  for (const button of languagePicker.querySelectorAll('[data-language]')) {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.language, { persist: true, updateUrl: true });
      languagePicker.open = false;
      languageToggle.focus();
    });
  }
  languagePicker.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      languagePicker.open = false;
      languageToggle.focus();
      event.preventDefault();
      event.stopPropagation();
    }
  });
  document.addEventListener('click', event => {
    if (!languagePicker.contains(event.target)) languagePicker.open = false;
  });
  languagePicker.addEventListener('focusout', event => {
    if (!languagePicker.contains(event.relatedTarget)) languagePicker.open = false;
  });

  themeButton.addEventListener('click', () => {
    chosenTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(chosenTheme);
    try { localStorage.setItem(themeKey, chosenTheme); } catch { /* Keep the choice for this visit. */ }
  });
  deviceTheme.addEventListener('change', followDevice);
  window.addEventListener('storage', event => {
    if (event.key === themeKey || event.key === null) {
      chosenTheme = preference(themeKey);
      followDevice();
    }
    if (event.key === languageKey || event.key === null) {
      applyLanguage(resolveLanguage(new URL(location.href).searchParams.get('lang'), preference(languageKey)));
    }
  });

  function openContact() {
    const contact = document.getElementById(location.hash.slice(1));
    if (contact instanceof HTMLElement && contact.classList.contains('person')) {
      const details = contact.querySelector('details');
      if (details) details.open = true;
      contact.scrollIntoView({ block: 'start' });
    }
  }
  openContact();
  window.addEventListener('hashchange', openContact);

  document.getElementById('close-share').addEventListener('click', () => {
    fallback.hidden = true;
    previousShareButton?.focus();
  });

  // Load the matching helper before showing buttons; clicks keep user activation.
  import(`./share.js${assetVersion}`).then(({ shareLink }) => {
    for (const button of document.querySelectorAll('[data-share]')) {
      button.hidden = false;
      button.addEventListener('click', async () => {
        if (sharing) return;
        previousShareButton = button;
        fallback.hidden = true;
        setStatus(null);
        const id = button.dataset.share;
        const url = sharingUrl(location.origin, language, id);
        const personName = id ? document.getElementById(id)?.querySelector('.person-name')?.textContent : '';
        const title = personName ? `${personName} — RenovAR` : text('shareTitle');
        sharing = true;
        button.disabled = true;
        button.setAttribute('aria-busy', 'true');
        const result = await shareLink({ title, url: url.href });
        sharing = false;
        button.disabled = false;
        button.removeAttribute('aria-busy');
        if (result === 'unavailable') {
          setStatus('shareUnavailable');
          fallback.hidden = false;
          fallbackInput.value = url.href;
          fallbackInput.focus();
          fallbackInput.select();
        }
      });
    }
  }).catch(() => setStatus('shareLoadError'));
}
