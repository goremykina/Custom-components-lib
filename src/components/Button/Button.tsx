import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
    // color?: string;
    // variant?: string;
    // size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    label: string;
    // className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button className={styles.test} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
