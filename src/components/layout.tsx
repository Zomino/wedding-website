import { useI18next, Link } from 'gatsby-plugin-react-i18next';
import { ArrowTopRightOnSquareIcon, Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react';

import LanguageSelector from './language-selector';
import DropdownMenu from './dropdown-menu';

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

    const menuOptions = [
        <Link className="block w-fit whitespace-nowrap px-2 py-1 text-sm" to="/" language={language} placeholder={undefined}>
            {t('buttons.home')}
        </Link>,
        <Link className="block w-fit whitespace-nowrap px-2 py-1 text-sm" to="/pre-wedding-photos" language={language} placeholder={undefined}>
            {t('buttons.pre-wedding-photos')}
        </Link>,
        // FIXME: The RSVP page doesn't work because Netlify is not picking up the submissions
        // <Link className="block w-fit whitespace-nowrap px-2 py-1 text-sm" to="/rsvp" language={language} placeholder={undefined}>
        //     {t('buttons.rsvp')}
        // </Link>,
    ];

    return (
        // Use flexbox with flex-grow on main to make the footer stick to the bottom when the content is shorter than the viewport
        <div className="flex min-h-screen flex-col">
            {/* Z-index is required as Gatsby image renders over the sticky header without it */}
            <header
                className={`sticky top-0 z-10 grid grid-cols-6 items-center bg-elephant-lighter p-3 transition-shadow md:p-5 ${shadow ? 'shadow-lg' : ''}`}
            >
                <div className="col-span-1 justify-self-start">{showLanuageSelector && <LanguageSelector />}</div>
                {/* Placeholder is required */}
                <Link className="col-span-4" placeholder={undefined} to="/" language={language}>
                    <span className="font-raleway text-xl tracking-widest md:text-4xl">{t('site-metadata.title')}</span>
                </Link>
                <div className="col-span-1 justify-self-end">
                    {<DropdownMenu triggerAria="Menu" triggerLabel={<Bars3Icon className="inline h-3 w-3" />} options={menuOptions} />}
                </div>
            </header>
            <main className="mx-auto mt-5 flex max-w-full flex-grow flex-col px-3 md:max-w-xl lg:max-w-3xl">{children}</main>
            <footer className="mt-16">
                <p>&copy; 2024 {t('site-metadata.author')}</p>
                <a
                    className="mt-1 inline-flex items-center text-sm hover:text-elephant-dark"
                    href="https://github.com/Zomino/wedding-website"
                    target="_blank"
                >
                    {t('buttons.view-github')}
                    <ArrowTopRightOnSquareIcon className="ml-1 inline-block h-4 w-4" />
                </a>
            </footer>
        </div>
    );
};

export default Layout;
