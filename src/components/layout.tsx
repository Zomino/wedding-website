import { Link } from 'gatsby';
import React from 'react';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [shadow, setShadow] = React.useState(false);

    // Add a shadow to the header when the user scrolls down to separate it from the rest of the page.
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
        // Use flexbox with flex-grow on main to make the footer stick to the bottom when the content is shorter than the viewport.
        <div className="flex min-h-screen flex-col">
            <header
                className={`sticky top-0 z-10 bg-elephant-lighter py-7 transition-shadow ${shadow ? 'shadow-lg' : ''}`}
            >
                <Link to="/">
                    <span className="font-raleway text-3xl tracking-widest md:text-4xl lg:text-5xl">
                        Angela & Zou
                    </span>
                </Link>
            </header>
            <main className="mx-auto mt-5 flex max-w-full flex-grow flex-col md:max-w-xl lg:max-w-2xl">
                {children}
            </main>
            <footer className="mt-20">
                <p>&copy; 2024 Zou Minowa</p>
            </footer>
        </div>
    );
};

export default Layout;
