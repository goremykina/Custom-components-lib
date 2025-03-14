import React from 'react';

export interface ButtonProps {
    // color?: string;
    // variant?: string;
    // size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    label: string;
    // className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default Button;
