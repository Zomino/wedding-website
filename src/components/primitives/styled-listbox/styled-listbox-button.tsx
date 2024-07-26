import { ListboxButton } from '@headlessui/react';
import React from 'react';

const StyledListboxButton: React.FC<React.PropsWithChildren<React.ComponentProps<typeof ListboxButton>>> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <ListboxButton
            className={`rounded-sm border-1 border-elephant-darker px-2 py-1 hover:border-elephant-dark hover:text-elephant-dark ${className}`}
            {...restProps}
        >
            {children}
        </ListboxButton>
    );
};

export default StyledListboxButton;
