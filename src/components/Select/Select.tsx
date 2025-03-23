import React, { useState } from 'react';
import styles from './Select.module.scss';

export interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    label?: string;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

const Select: React.FC<SelectProps> = ({
    value,
    label,
    onChange,
    options,
    disabled,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={styles.selectContainer}>
            <label
                className={`${styles.label} ${isFocused || value ? styles.labelUp : ''} ${isFocused ? styles.labelFocus : ''}`}
            >
                {label}
            </label>

            <select
                className={styles.select}
                value={value === ' ' ? label : value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={disabled}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
