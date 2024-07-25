import { Link } from 'gatsby';
import React from 'react';

const ButtonStyledLink: React.FC<React.PropsWithoutRef<React.ComponentProps<typeof Link>>> = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <Link
            className={`rounded-sm border-2 border-elephant-darker px-3 py-2 hover:border-elephant-dark hover:text-elephant-dark ${className}`}
            {...restProps}
        >
            {children}
        </Link>
    );
};

export default ButtonStyledLink;
