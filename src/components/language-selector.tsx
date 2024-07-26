import { useI18next, Link } from 'gatsby-plugin-react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Listbox } from '@headlessui/react';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';

import StyledListboxButton from './primitives/styled-listbox/styled-listbox-button';
import StyledListboxOptions from './primitives/styled-listbox/styled-listbox-options';
import StyledListboxOption from './primitives/styled-listbox/styled-listbox-option';

const LanguageSelector: React.FC = () => {
    const { originalPath, t, language } = useI18next();

    const languageOptions = [
        {
            value: 'en',
            label: t('buttons.english'),
            countryCode: 'GB',
        },
        {
            value: 'zh',
            label: t('buttons.chinese'),
            countryCode: 'HK',
        },
    ];

    const currentLanguage = languageOptions.find((option) => option.value === language)!;

    return (
        <Listbox>
            <StyledListboxButton className="whitespace-nowrap">
                <ReactCountryFlag countryCode={currentLanguage.countryCode || currentLanguage.value} aria-label={currentLanguage.label} />
                <ChevronDownIcon className="ml-1 inline h-3 w-3" aria-hidden />
            </StyledListboxButton>
            <StyledListboxOptions anchor={{ to: 'bottom', gap: 1 }} className="w-[var(--button-width)]">
                {languageOptions.map((option) => (
                    <Link placeholder={undefined} to={originalPath} language={option.value}>
                        <StyledListboxOption key={option.value} value={option}>
                            <ReactCountryFlag countryCode={option.countryCode} aria-label={option.label} />
                        </StyledListboxOption>
                    </Link>
                ))}
            </StyledListboxOptions>
        </Listbox>
    );
};

export default LanguageSelector;
