import React, { useCallback, useState } from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    disabled,
    color,
    size,
    required,
    onChange
}) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);

        if (onChange) {
            onChange({
                target: {
                    checked: newChecked,
                },
            } as React.ChangeEvent<HTMLInputElement>);
        }
    };

    const getSizeClass = useCallback((size: string | undefined) => {
        switch (size) {
            case 'small':
                return styles.checkboxSmall;
            case 'large':
                return styles.checkboxLarge;
            default:
                return '';
        }
    }, []);

    const getColor = useCallback((color: string | undefined) => {
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
                    className={`${styles.checkmarkContainer} ${getSizeClass(size)} ${getColor(color)}`}
                >
                    {isChecked ?
                        <svg className={styles.checkmark}
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 -960 960 960"
                             fill="#e3e3e3">
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                        </svg>
                        : ""}
                </span>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
