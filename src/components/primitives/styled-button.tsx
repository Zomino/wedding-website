import { Button } from '@headlessui/react';
import React from 'react';

const StyledButton: React.FC<React.PropsWithChildren<React.ComponentProps<typeof Button>>> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <Button
            className={`rounded-sm border-1 border-elephant-darker bg-elephant-darker px-2 py-1 text-elephant-lighter hover:border-elephant-dark hover:bg-elephant-dark hover:text-elephant-lighter ${className}`}
            {...restProps}
        >
            {children}
        </Button>
    );
};

export default StyledButton;
