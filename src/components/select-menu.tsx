import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';

import StyledListboxButton from './primitives/styled-listbox/styled-listbox-button';
import StyledListboxOptions from './primitives/styled-listbox/styled-listbox-options';
import StyledListboxOption from './primitives/styled-listbox/styled-listbox-option';

interface Option {
    value: string;
    label: React.ReactNode;
    default?: boolean;
}

interface SelectMenuProps {
    onChange?: (value: Option) => void;
    options: Array<Option>;
}

const SelectMenu: React.FC<SelectMenuProps> = (props) => {
    // Provide a default empty function for onChange
    const { onChange = () => undefined, options } = props;

    const [selectedOption, setSelectedOption] = React.useState(options.find((option) => option.default) || options[0]);

    const handleChange = (value: Option) => {
        setSelectedOption(value);
        onChange(value);
    };

    return (
        <Listbox value={selectedOption} onChange={handleChange}>
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

export { type Option };

export default SelectMenu;
