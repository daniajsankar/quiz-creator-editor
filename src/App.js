import React from 'react';
import Routes from './Routes.js';
import './styles/App.scss';
import localEn from './translations/en.json';
import { LanguageProvider } from './contexts/language/language.provider';

const messages = {
  en: localEn,
};
function App() {
  const { innerWidth: width } = window;
  const lang = localStorage.getItem('lang') ?? 'en';
  React.useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === 'ar' ? 'rtl' : 'ltr');
  }, []);
  if (width < 800) return <div>Please open using wide screen</div>;
  if (!lang) return <div />;
  return (
    <LanguageProvider messages={messages} initLocale={lang}>
      <Routes />
    </LanguageProvider>
  );
}

export default App;
