import React, { useCallback, useState } from 'react';
import styles from './TextField.module.scss';

export interface TextInputProps {
    variant: 'outlined' | 'filled' | 'standard';
    type: 'text' | 'password' | 'email';
    required: boolean;
    readOnly: boolean;
    placeholder?: string;
    error?: boolean;
    helperText?: string;
    label: string;
    errorLabel: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextInputProps> = ({
    variant,
    type,
    placeholder,
    required,
    readOnly,
    error,
    value,
    label,
    onChange,
    errorLabel = 'Error',
    helperText,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const getVariantClass = useCallback((variant: string) => {
        switch (variant) {
            case 'filled':
                return styles.inputFilled;
            case 'outlined':
                return styles.inputOutlined;
            default:
                return styles.inputStandard;
        }
    }, []);

    return (
        <div className={`${styles.inputContainer} ${getVariantClass(variant)}`}>
            {!isFocused && value ? null : (
                <label
                    className={`${styles.label} ${isFocused ? styles.labelFocus : styles.labelNoFocus}
                    ${error && isFocused ? styles.errorLabel : ''}
                    `}
                >
                    {error ? errorLabel : label}
                </label>
            )}

            <input
                className={`${styles.input} ${error || (error && isFocused) ? styles.error : ''}`}
                type={type}
                required={required}
                readOnly={readOnly}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <span
                className={`${error ? styles.errorText : styles.noErrorText}`}
            >
                {helperText}
            </span>
        </div>
    );
};

export default TextField;
