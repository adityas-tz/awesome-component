import React from 'react';
import './Card.css';

export interface CardProps {
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    header,
    footer,
    className = '',
}) => {
    return (
        <div className={`ac-card ${className}`}>
            {header && <div className="ac-card-header">{header}</div>}
            <div className="ac-card-body">{children}</div>
            {footer && <div className="ac-card-footer">{footer}</div>}
        </div>
    );
};
