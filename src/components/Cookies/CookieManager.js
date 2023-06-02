import Cookies from 'js-cookie';

export const setConsentCookie = () => {
    Cookies.set('analyticsConsent', 'true', { expires: 365 });
};

export const hasConsentCookie = () => {
    return Cookies.get('analyticsConsent') === 'true';
};