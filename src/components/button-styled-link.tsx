import type { GatsbyLinkProps } from "gatsby";
import { Link } from "gatsby";
import React from "react";

// Gatsby Link preloads resources for the linked page when the link scrolls into view or when the mouse hovers over it.
// Gatsby Link ref prop is problematic: https://www.charpeni.com/blog/wrapping-gatsbys-link-with-typescript.
const ButtonStyledLink = <TState,>(
  props: React.PropsWithoutRef<GatsbyLinkProps<TState>>
) => {
  const { children, className, ...restProps } = props;

  return (
    <Link
      className={`active:bg-elephant bg-elephant-darker cursor-pointer font-lato hover:bg-elephant-dark p-1 text-elephant-lighter w-fit ${className}`}
      {...restProps}
    >
      <div className="border border-elephant-lighter py-2 px-5">{children}</div>
    </Link>
  );
};

export default ButtonStyledLink;
