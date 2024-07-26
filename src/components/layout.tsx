import { useI18next, Link } from 'gatsby-plugin-react-i18next';
import React from 'react';

import LanguageSelector from './language-selector';

interface LayoutProps {
    showLanuageSelector?: boolean;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = (props) => {
    const { children, showLanuageSelector = true } = props;

    const [shadow, setShadow] = React.useState(false);
    const { language, t } = useI18next();

    // Add a shadow to the header when the user scrolls down to separate it from the rest of the page
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        // Use flexbox with flex-grow on main to make the footer stick to the bottom when the content is shorter than the viewport
        <div className="flex min-h-screen flex-col">
            {/* Z-index is required as Gatsby image renders over the sticky header without it */}
            <header
                className={`sticky top-0 z-10 grid grid-cols-6 items-center bg-elephant-lighter p-5 transition-shadow md:px-7 md:py-10 ${shadow ? 'shadow-lg' : ''}`}
            >
                <div className="col-span-1">{showLanuageSelector && <LanguageSelector className="justify-self-start" />}</div>
                {/* Placeholder is required */}
                <Link className="col-span-4" placeholder={undefined} to="/" language={language}>
                    <span className="font-raleway text-xl tracking-widest md:text-4xl lg:text-5xl">{t('site-metadata.title')}</span>
                </Link>
            </header>
            <main className="mx-auto mt-5 flex max-w-full flex-grow flex-col px-5 md:max-w-xl lg:max-w-2xl">{children}</main>
            <footer className="mt-20">
                <p>&copy; 2024 {t('site-metadata.author')}</p>
            </footer>
        </div>
    );
};

export default Layout;
