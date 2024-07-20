import { Input } from '@headlessui/react';
import React from 'react';

interface StyledTextInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const StyledTextInput: React.FC<
    React.PropsWithChildren<StyledTextInputProps>
> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <Input
            type="text"
            className={`rounded-sm p-3 focus:outline-elephant-darker ${className}`}
            {...restProps}
        >
            {children}
        </Input>
    );
};

export default StyledTextInput;
