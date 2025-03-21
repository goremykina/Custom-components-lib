import React, { useCallback, useState } from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    required: boolean;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    disabled,
    color,
    size,
    required,
}) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
    };

    const getSizeClass = useCallback((size: string) => {
        switch (size) {
            case 'small':
                return styles.checkboxSmall;
            case 'large':
                return styles.checkboxLarge;
            default:
                return '';
        }
    }, []);

    const getColor = useCallback((color: string) => {
        switch (color) {
            case 'green':
                return styles.checkboxGreen;
            case 'pink':
                return styles.checkboxPink;
            default:
                return '';
        }
    }, []);

    return (
        <div>
            <label
                className={`
                ${styles.container}
                ${getSizeClass(size)} 
                ${getColor(color)}
                `}
            >
                <input
                    type={'checkbox'}
                    checked={isChecked}
                    disabled={disabled}
                    required={required}
                    onChange={handleClick}
                ></input>
                <span
                    className={`${styles.checkmark} ${getSizeClass(size)} ${getColor(color)}`}
                ></span>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
