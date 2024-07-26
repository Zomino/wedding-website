import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';

interface ButtonStyledLinkProps extends Omit<React.ComponentProps<typeof Link>, 'placeholder'> {
    className?: string;
    // Placeholder is required for the Link component despite undefined being a valid value
    // Make it optional here to avoid having to pass it in every time
    placeholder?: string;
}


const ButtonStyledLink: React.FC<React.PropsWithChildren<ButtonStyledLinkProps>> = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <Link
            className={`rounded-sm border-1 border-elephant-darker px-2 py-1 hover:border-elephant-dark hover:text-elephant-dark ${className}`}
            placeholder={undefined}
            {...restProps}
        >
            {children}
        </Link>
    );
};

export default ButtonStyledLink;
