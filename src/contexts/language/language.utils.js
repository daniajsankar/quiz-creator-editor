import { locales, rtlLocales, defaultLocale } from './language.config';

export function isLocale(tested) {
	return locales.some((locale) => locale === tested);
}

export function isRTL(tested) {
	return rtlLocales.some((locale) => locale === tested);
}

export function getInitialLocale() {

	return defaultLocale;
}
