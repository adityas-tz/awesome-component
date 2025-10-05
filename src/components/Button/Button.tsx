import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    children: React.ReactNode;
}

export const Button = ({
    variant = 'primary',
    size = 'md',
    disabled = false,
    children,
    className = '',
    ...props
}) => {
    const classes = `ac-button ac-button--${variant} ac-button--${size} ${className}`;

    return (
        <button
            className={classes}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
