export const messages = {
  pt: {
    name: 'Português', tag: 'pt-PT', locale: 'pt_PT',
    pageTitle: 'Links e contactos', documentTitle: 'RenovAR | Links e contactos',
    description: 'Visite o site RenovAR, envie um email e guarde os contactos da equipa.',
    skipLink: 'Saltar para o conteúdo', brandLabel: 'RenovAR — visitar o site', navLabel: 'Ligações RenovAR',
    siteLink: 'Visitar o site', emailLink: 'Enviar email', contactsHeading: 'Guardar contactos',
    saveContact: 'Guardar contacto', saveContactLabel: 'Guardar contacto de {name}',
    contactDetails: 'Email e telefone', shareContact: 'Partilhar contacto', shareContactLabel: 'Partilhar contacto de {name}',
    sharePage: 'Partilhar página', shareTitle: 'RenovAR — Links e contactos',
    socialHeading: 'Redes sociais', resourcesHeading: 'Outros links',
    fallbackHint: 'Use a opção de partilha do navegador ou este link.', fallbackLink: 'Link para partilhar', close: 'Fechar',
    shareUnavailable: 'A partilha do dispositivo não está disponível neste navegador.',
    shareLoadError: 'Use a opção de partilha do navegador.',
    themeDark: 'Ativar modo escuro', themeLight: 'Ativar modo claro',
    languageLabel: 'Idioma', languageCurrent: 'Idioma: {language}',
  },
  en: {
    name: 'English', tag: 'en-GB', locale: 'en_GB',
    pageTitle: 'Links & contacts', documentTitle: 'RenovAR | Links & contacts',
    description: 'Visit the RenovAR website, send an email and save the team’s contact details.',
    skipLink: 'Skip to content', brandLabel: 'RenovAR — visit website', navLabel: 'RenovAR links',
    siteLink: 'Visit website', emailLink: 'Send email', contactsHeading: 'Save contacts',
    saveContact: 'Save contact', saveContactLabel: 'Save contact for {name}',
    contactDetails: 'Email & phone', shareContact: 'Share contact', shareContactLabel: 'Share contact for {name}',
    sharePage: 'Share page', shareTitle: 'RenovAR — Links & contacts',
    socialHeading: 'Social media', resourcesHeading: 'More links',
    fallbackHint: 'Use your browser’s share option or this link.', fallbackLink: 'Link to share', close: 'Close',
    shareUnavailable: 'Device sharing is not available in this browser.',
    shareLoadError: 'Use your browser’s share option.',
    themeDark: 'Switch to dark mode', themeLight: 'Switch to light mode',
    languageLabel: 'Language', languageCurrent: 'Language: {language}',
  },
  fr: {
    name: 'Français', tag: 'fr-FR', locale: 'fr_FR',
    pageTitle: 'Liens et contacts', documentTitle: 'RenovAR | Liens et contacts',
    description: 'Consultez le site RenovAR, envoyez un e-mail et enregistrez les coordonnées de l’équipe.',
    skipLink: 'Aller au contenu', brandLabel: 'RenovAR — visiter le site', navLabel: 'Liens RenovAR',
    siteLink: 'Visiter le site', emailLink: 'Envoyer un e-mail', contactsHeading: 'Enregistrer les contacts',
    saveContact: 'Enregistrer', saveContactLabel: 'Enregistrer le contact : {name}',
    contactDetails: 'E-mail et téléphone', shareContact: 'Partager le contact', shareContactLabel: 'Partager le contact : {name}',
    sharePage: 'Partager la page', shareTitle: 'RenovAR — Liens et contacts',
    socialHeading: 'Réseaux sociaux', resourcesHeading: 'Autres liens',
    fallbackHint: 'Utilisez le partage du navigateur ou ce lien.', fallbackLink: 'Lien à partager', close: 'Fermer',
    shareUnavailable: 'Le partage de l’appareil n’est pas disponible dans ce navigateur.',
    shareLoadError: 'Utilisez le partage du navigateur.',
    themeDark: 'Activer le mode sombre', themeLight: 'Activer le mode clair',
    languageLabel: 'Langue', languageCurrent: 'Langue : {language}',
  },
  es: {
    name: 'Español', tag: 'es-ES', locale: 'es_ES',
    pageTitle: 'Enlaces y contactos', documentTitle: 'RenovAR | Enlaces y contactos',
    description: 'Visita el sitio web de RenovAR, envía un correo y guarda los contactos del equipo.',
    skipLink: 'Saltar al contenido', brandLabel: 'RenovAR — visitar el sitio web', navLabel: 'Enlaces de RenovAR',
    siteLink: 'Visitar el sitio web', emailLink: 'Enviar correo', contactsHeading: 'Guardar contactos',
    saveContact: 'Guardar contacto', saveContactLabel: 'Guardar contacto de {name}',
    contactDetails: 'Correo y teléfono', shareContact: 'Compartir contacto', shareContactLabel: 'Compartir contacto de {name}',
    sharePage: 'Compartir página', shareTitle: 'RenovAR — Enlaces y contactos',
    socialHeading: 'Redes sociales', resourcesHeading: 'Otros enlaces',
    fallbackHint: 'Usa la opción de compartir del navegador o este enlace.', fallbackLink: 'Enlace para compartir', close: 'Cerrar',
    shareUnavailable: 'La función de compartir del dispositivo no está disponible en este navegador.',
    shareLoadError: 'Usa la opción de compartir del navegador.',
    themeDark: 'Activar modo oscuro', themeLight: 'Activar modo claro',
    languageLabel: 'Idioma', languageCurrent: 'Idioma: {language}',
  },
};

const supported = value => typeof value === 'string' && Object.prototype.hasOwnProperty.call(messages, value.toLowerCase());

export function resolveLanguage(requested, saved) {
  if (supported(requested)) return requested.toLowerCase();
  if (supported(saved)) return saved.toLowerCase();
  return 'pt';
}

export function translate(language, key, values = {}) {
  const text = messages[resolveLanguage(language)][key];
  if (typeof text !== 'string') throw new Error(`Unknown translation: ${key}`);
  return text.replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
}

export function sharingUrl(origin, language, person = '') {
  const url = new URL('/links/', origin);
  url.searchParams.set('lang', resolveLanguage(language));
  if (person) url.hash = person;
  return url;
}
