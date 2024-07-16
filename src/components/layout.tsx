import { Link } from "gatsby";
import React from "react";

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  pageTitle,
}) => {
  return (
    // Use flexbox with flex-grow on main to make the footer stick to the bottom when the content is shorter than the viewport.
    <div className="flex flex-col h-screen">
      <header className="font-raleway pt-10 tracking-wider">
        <Link className="text-3xl md:text-4xl" to="/">
          Angela & Zou
        </Link>
        <h1 className="mt-5 md:text-xl">{pageTitle}</h1>
      </header>
      <main className="flex flex-col flex-grow font-lato max-w-xs mt-5 mx-auto p-5 md:max-w-lg">
        {children}
      </main>
      <footer className="font-lato mt-20">
        <p className="font-lato">
          &copy; 2024 Zou Minowa. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
