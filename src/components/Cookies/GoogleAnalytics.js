import { useEffect } from 'react';
import { hasConsentCookie } from './CookieManager';

const GoogleAnalytics = () => {
    useEffect(() => {
        if (hasConsentCookie()) {
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-XLB8ZKTG7F', {
                'anonymize_ip': true,
                'consent_mode': 'explicit'
            });
        }
    }, []);

    return null;
};

export default GoogleAnalytics;