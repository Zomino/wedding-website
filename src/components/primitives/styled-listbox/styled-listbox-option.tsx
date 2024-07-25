import { ListboxOption } from '@headlessui/react';
import React from 'react';

const StyledListboxOption: React.FC<React.PropsWithChildren<React.ComponentProps<typeof ListboxOption>>> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        // Gatsby images have a z-index of 10, so this is the minimum required to ensure the option are visible
        <ListboxOption className={`cursor-pointer data-[focus]:underline ${className}`} {...restProps}>
            {children}
        </ListboxOption>
    );
};

export default StyledListboxOption;
