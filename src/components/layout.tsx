import { Link } from 'gatsby';
import React from 'react';

interface LayoutProps {
    pageTitle: string;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
    children,
    pageTitle,
}) => {
    return (
        // Use flexbox with flex-grow on main to make the footer stick to the bottom when the content is shorter than the viewport.
        <div className="flex h-screen flex-col bg-elephant-lighter p-5 text-center font-lato font-light text-elephant-darker">
            <header>
                <Link to="/">
                    <div className="mt-5 font-raleway text-3xl tracking-widest md:text-4xl lg:text-5xl">
                        Angela & Zou
                    </div>
                </Link>
            </header>
            <main className="mx-auto mt-5 flex max-w-full flex-grow flex-col md:max-w-xl lg:max-w-2xl">
                {children}
            </main>
            <footer className="mt-5">
                <p>&copy; 2024 Zou Minowa</p>
            </footer>
        </div>
    );
};

export default Layout;
