import React from 'react';

import { IntlProvider } from 'react-intl';
import { isRTL } from './language.utils';
import { injectIntl } from 'react-intl';
const LanguageContext = React.createContext({});

export const LanguageProvider = ({ children, messages, initLocale }) => {
	const [locale, setLocale] = React.useState(initLocale ?? 'en');
	const [switchLanguageLoading, setLoading] = React.useState(false);
	const changeLanguage = (newLocale) => {
		setLocale(newLocale);
		localStorage.setItem('lang', newLocale);
		window.location.reload();
	};
	let isRtl = isRTL(locale);

	return (
		<LanguageContext.Provider value={{ locale, changeLanguage, isRtl, switchLanguageLoading }}>
			<IntlProvider locale={locale} messages={messages[locale]}>
				{children}
			</IntlProvider>
		</LanguageContext.Provider>
	);
};

export const useLocale = () => React.useContext(LanguageContext);
export const injectGetMessage = (fn) => React.createElement(injectIntl(({ intl }) => fn(intl.formatMessage)));
