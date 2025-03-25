import React, { useCallback, useState } from 'react';
import styles from './Switch.module.scss';

export interface SwitchProps {
    checked: boolean;
    disabled: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    size?: 'small' | 'medium' | 'large';
    color: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, disabled, size, color }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
    };

    const getSizeClass = useCallback((size: string) => {
        switch (size) {
            case 'small':
                return styles.small;
            case 'large':
                return styles.large;
            default:
                return styles.medium;
        }
    }, []);

    const getColor = useCallback((color: string) => {
        switch (color) {
            case 'orange':
                return styles.switchOrange;
            case 'purple':
                return styles.switchPurple;
            default:
                return '';
        }
    }, []);

    return (
        <div>
            <label
                className={`
                ${styles.switchWrapper} 
                ${disabled ? styles.disabled : ''}
                `}
            >
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleClick}
                    disabled={disabled}
                />
                <span
                    className={`
                    ${styles.slider}
                    ${getSizeClass(size)}
                    ${getColor(color)}
                    `}
                >
                    <span
                        className={`${styles.thumb} ${getColor(color)}`}
                    ></span>
                </span>
            </label>
        </div>
    );
};

export default Switch;
