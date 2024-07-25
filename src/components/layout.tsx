import React from 'react';
import { Link } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [shadow, setShadow] = React.useState(false);
    const { defaultLanguage, language, originalPath, t } = useI18next();

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

    // These options must be kept in sync with the languages in gatsby-config
    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'zh', label: '繁體中文' },
    ];

    return (
        // Use flexbox with flex-grow on main to make the footer stick to the bottom when the content is shorter than the viewport
        <div className="flex min-h-screen flex-col">
            {/* Z-index is required as Gatsby image renders over the sticky header without it */}
            <header className={`sticky top-0 z-10 bg-elephant-lighter py-10 transition-shadow ${shadow ? 'shadow-lg' : ''}`}>
                <nav>
                    <ul className="flex justify-center space-x-5">
                        {languageOptions.map((option) => (
                            <li key={option.value}>
                                <Link
                                    className={option.value === language ? 'underline' : 'no-underline'}
                                    to={option.value === defaultLanguage ? originalPath : `/${option.value}${originalPath}`}
                                >
                                    {option.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Placeholder is required */}
                <Link to={language === defaultLanguage ? '/' : `/${language}`}>
                    <span className="font-raleway text-3xl tracking-widest md:text-4xl lg:text-5xl">{t('site-metadata.title')}</span>
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
