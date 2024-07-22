import { Button } from '@headlessui/react';
import React from 'react';

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const StyledButton: React.FC<React.PropsWithChildren<StyledButtonProps>> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <Button
            className={`rounded-sm bg-elephant-darker px-4 py-2 text-elephant-lighter hover:bg-elephant-dark active:bg-elephant ${className}`}
            {...restProps}
        >
            {children}
        </Button>
    );
};

export default StyledButton;
