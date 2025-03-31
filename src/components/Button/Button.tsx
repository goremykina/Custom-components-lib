import React, { useCallback } from 'react';
import styles from './Button.module.scss';
import Spinner from '../spinner/Spinner';

export interface ButtonProps {
    color?: 'success' | 'error';
    variant: 'text' | 'contained' | 'outlined';
    size: 'small' | 'medium' | 'large';
    onClick?: () => void;
    label: string;
    isDisabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant,
    size,
    isDisabled,
    isLoading,
    color,
}) => {
    const getVariantClass = useCallback((variant: string) => {
        switch (variant) {
            case 'text':
                return styles.buttonText;
            case 'outlined':
                return styles.buttonOutlined;
            default:
                return styles.buttonContained;
        }
    }, []);

    const getSizeClass = useCallback((size: string) => {
        switch (size) {
            case 'medium':
                return styles.buttonMedium;
            case 'large':
                return styles.buttonLarge;
            default:
                return styles.buttonSmall;
        }
    }, []);

    const getColor = useCallback((color: string) => {
        switch (color) {
            case 'success':
                return styles.buttonSuccess;
            case 'error':
                return styles.buttonError;
            default:
                return '';
        }
    }, []);

    return (
        <button
            className={`
            ${styles.button} 
            ${getVariantClass(variant)} 
            ${getSizeClass(size)} 
            ${isDisabled ? styles.disabled : ''} 
            ${isLoading ? styles.loading : ''}
            ${getColor(color)}
            `}
            onClick={onClick}
            disabled={isDisabled || isLoading}
        >
            {isLoading ? <Spinner /> : label}
        </button>
    );
};

export default Button;
