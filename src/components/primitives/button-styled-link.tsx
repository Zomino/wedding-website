import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';

interface ButtonStyledLinkProps extends Omit<React.ComponentProps<typeof Link>, 'placeholder'> {
    className?: string;
    // Placeholder is required for the Link component despite undefined being a valid value
    // Make it optional here to avoid having to pass it in every time
    placeholder?: string;
}

const ButtonStyledLink: React.FC<React.PropsWithChildren<ButtonStyledLinkProps>> = (props) => {
    const { children, className, placeholder, ...restProps } = props;

    return (
        <Link
            className={`rounded-sm bg-elephant-darker px-4 py-2 text-elephant-lighter hover:bg-elephant-dark active:bg-elephant ${className}`}
            placeholder={placeholder}
            {...restProps}
        >
            {children}
        </Link>
    );
};

export default ButtonStyledLink;
