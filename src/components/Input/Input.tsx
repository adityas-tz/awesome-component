import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const Input = ({
    label,
    error,
    helperText,
    className = '',
    id,
    ...props
}: InputProps) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    return (
        <div className={`ac-input-wrapper ${className}`}>
            {label && (
                <label htmlFor={inputId} className="ac-input-label">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`ac-input ${hasError ? 'ac-input--error' : ''}`}
                aria-invalid={hasError}
                aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                {...props}
            />
            {error && (
                <span id={`${inputId}-error`} className="ac-input-error">
                    {error}
                </span>
            )}
            {!error && helperText && (
                <span id={`${inputId}-helper`} className="ac-input-helper">
                    {helperText}
                </span>
            )}
        </div>
    );
};
