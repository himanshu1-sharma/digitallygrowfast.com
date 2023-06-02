import CookieBanner from './CookieBanner';
import GoogleAnalytics from './GoogleAnalytics';

const Layout = ({ children }) => {
    return (
        <div>
            <CookieBanner />
            <GoogleAnalytics />
            {children}
        </div>
    );
};

export default Layout;