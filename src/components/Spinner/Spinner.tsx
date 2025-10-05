import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
    size = 'md',
    color,
}) => {
    return (
        <div
            className={`ac-spinner ac-spinner--${size}`}
            style={color ? { borderTopColor: color } : undefined}
            role="status"
            aria-label="Loading"
        >
            <span className="ac-sr-only">Loading...</span>
        </div>
    );
};
