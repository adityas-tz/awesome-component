import React from 'react';
import './Badge.css';

export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    size?: 'sm' | 'md' | 'lg';
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'md',
}) => {
    return (
        <span className={`ac-badge ac-badge--${variant} ac-badge--${size}`}>
            {children}
        </span>
    );
};
