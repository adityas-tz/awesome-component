import React from 'react';
import './TextArea.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const TextArea = ({
    label,
    error,
    helperText,
    className = '',
    id,
    ...props
}) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    return (
        <div className={`ac-textarea-wrapper ${className}`}>
            {label && (
                <label htmlFor={textareaId} className="ac-textarea-label">
                    {label}
                </label>
            )}
            <textarea
                id={textareaId}
                className={`ac-textarea ${hasError ? 'ac-textarea--error' : ''}`}
                aria-invalid={hasError}
                aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
                {...props}
            />
            {error && (
                <span id={`${textareaId}-error`} className="ac-textarea-error">
                    {error}
                </span>
            )}
            {!error && helperText && (
                <span id={`${textareaId}-helper`} className="ac-textarea-helper">
                    {helperText}
                </span>
            )}
        </div>
    );
};
