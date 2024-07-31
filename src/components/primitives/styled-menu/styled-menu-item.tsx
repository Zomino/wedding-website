import { MenuItem } from '@headlessui/react';
import React from 'react';

const StyledMenuItem: React.FC<React.PropsWithChildren<React.ComponentProps<typeof MenuItem>>> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        // Gatsby images have a z-index of 10, so this is the minimum required to ensure the option are visible
        <MenuItem className={`cursor-pointer data-[focus]:underline ${className}`} {...restProps}>
            {children}
        </MenuItem>
    );
};

export default StyledMenuItem;
