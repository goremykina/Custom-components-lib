import React from 'react';

export interface ButtonProps {
    // color?: string;
    // variant?: string;
    // size?: string | number;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ className }) => {
    return <button className={className}>click</button>;
};

export default Button;
