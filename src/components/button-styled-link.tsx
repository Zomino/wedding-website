import type { GatsbyLinkProps } from 'gatsby';
import { Link } from 'gatsby';
import React from 'react';

// Gatsby Link preloads resources for the linked page when the link scrolls into view or when the mouse hovers over it.
// Gatsby Link ref prop is problematic: https://www.charpeni.com/blog/wrapping-gatsbys-link-with-typescript.
const ButtonStyledLink = <TState,>(
    props: React.PropsWithoutRef<GatsbyLinkProps<TState>>
) => {
    const { children, className, ...restProps } = props;

    return (
        <Link
            className={`w-fit cursor-pointer bg-elephant-darker p-1 font-lato text-elephant-lighter hover:bg-elephant-dark active:bg-elephant ${className}`}
            {...restProps}
        >
            <div className="border border-elephant-lighter px-5 py-2">
                {children}
            </div>
        </Link>
    );
};

export default ButtonStyledLink;
