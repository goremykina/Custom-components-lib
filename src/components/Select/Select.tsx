import React, { useState } from 'react';
import styles from './Select.module.scss';

export interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    label?: string;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Select: React.FC<SelectProps> = ({ value, label, onChange, options }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={styles.selectContainer}>
            <label>{label}</label>
            <select
                className={styles.select}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
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
