import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';

import StyledListboxButton from './primitives/styled-listbox/styled-listbox-button';
import StyledListboxOptions from './primitives/styled-listbox/styled-listbox-options';
import StyledListboxOption from './primitives/styled-listbox/styled-listbox-option';

interface Option {
    value: string;
    label: React.ReactNode;
}

interface SelectMenuProps {
    options: Array<Option>;
}

const SelectMenu: React.FC<SelectMenuProps> = (props) => {
    const { options } = props;

    const [selectedOption, setSelectedOption] = React.useState(options[0]);

    return (
        <Listbox value={selectedOption} onChange={(value) => setSelectedOption(value)}>
            <StyledListboxButton>
                {selectedOption?.label}
                <ChevronDownIcon className="ml-1 inline h-5 w-5" aria-hidden />
            </StyledListboxButton>
            <StyledListboxOptions anchor={{ to: 'bottom', gap: 1 }} className="w-[var(--button-width)]">
                {options.map((option) => (
                    <StyledListboxOption key={option.value} value={option}>
                        {option.label}
                    </StyledListboxOption>
                ))}
            </StyledListboxOptions>
        </Listbox>
    );
};

export default SelectMenu;
