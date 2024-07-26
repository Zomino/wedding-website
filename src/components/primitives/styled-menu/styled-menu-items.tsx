import { MenuItems } from '@headlessui/react';
import React from 'react';

const StyledMenuItems: React.FC<React.PropsWithChildren<React.ComponentProps<typeof MenuItems>>> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        // Gatsby images have a z-index of 10, so this is the minimum required to ensure the options are visible
        <MenuItems
            className={`z-10 rounded-sm border-1 border-elephant-darker bg-elephant-lighter px-2 py-1 hover:border-elephant-dark hover:text-elephant-dark ${className}`}
            {...restProps}
        >
            {children}
        </MenuItems>
    );
};

export default StyledMenuItems;
