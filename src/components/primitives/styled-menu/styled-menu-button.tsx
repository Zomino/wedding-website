import { MenuButton } from '@headlessui/react';
import React from 'react';

const StyledMenuButton: React.FC<React.PropsWithChildren<React.ComponentProps<typeof MenuButton>>> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <MenuButton
            className={`whitespace-nowrap rounded-sm border-1 border-elephant-darker px-2 py-1 hover:border-elephant-dark hover:text-elephant-dark ${className}`}
            {...restProps}
        >
            {children}
        </MenuButton>
    );
};

export default StyledMenuButton;
