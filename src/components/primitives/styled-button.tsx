import { Button } from '@headlessui/react';
import React from 'react';

const StyledButton: React.FC<React.PropsWithChildren<React.ComponentProps<typeof Button>>> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <Button
            className={`rounded-sm border-2 border-elephant-darker px-3 py-2 hover:border-elephant-dark hover:text-elephant-dark ${className}`}
            {...restProps}
        >
            {children}
        </Button>
    );
};

export default StyledButton;
