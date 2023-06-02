import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { setConsentCookie } from './CookieManager';

const CookieBanner = () => {
    return (
        <div className='cookiesBg'>
            <CookieConsent
                enableDeclineButton
                onAccept={setConsentCookie}
                declineButtonText="Decline"
                buttonText="Accept"
            >
                <h2>We use <span>cookies</span></h2>
                <p>This website uses cookies to ensure you get the best experience on our website.
                    We and our partners use cookies to store and access personal data such as browsing data for purposes such as serving and personalizing content and advertising and analyzing site traffic.</p>
            </CookieConsent>
        </div>
    );
};

export default CookieBanner;