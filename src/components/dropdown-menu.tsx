import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';

import StyledMenuButton from './primitives/styled-menu/styled-menu-button';
import StyledMenuItems from './primitives/styled-menu/styled-menu-items';
import StyledMenuItem from './primitives/styled-menu/styled-menu-item';

interface DropdownMenuProps {
    options: React.ReactNode[];
    triggerLabel: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
    const { options, triggerLabel } = props;

    return (
        <Menu>
            <StyledMenuButton>
                {triggerLabel}
                <ChevronDownIcon className="ml-1 inline h-3 w-3" aria-hidden />
            </StyledMenuButton>
            <StyledMenuItems anchor={{ to: 'bottom end', gap: 2 }}>
                {options.map((option, index) => (
                    <StyledMenuItem key={index}>{option}</StyledMenuItem>
                ))}
            </StyledMenuItems>
        </Menu>
    );
};

export default DropdownMenu;
