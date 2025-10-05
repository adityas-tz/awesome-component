import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

export interface DropdownOption {
    value: string;
    label: string;
}

export interface DropdownProps {
    options: DropdownOption[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    disabled?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
    options,
    value,
    onChange,
    placeholder = 'Select an option',
    label,
    error,
    disabled = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className="ac-dropdown-wrapper">
            {label && <label className="ac-dropdown-label">{label}</label>}
            <div
                ref={dropdownRef}
                className={`ac-dropdown ${error ? 'ac-dropdown--error' : ''} ${disabled ? 'ac-dropdown--disabled' : ''}`}
            >
                <button
                    type="button"
                    className="ac-dropdown-trigger"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                >
                    <span>{selectedOption ? selectedOption.label : placeholder}</span>
                    <span className={`ac-dropdown-arrow ${isOpen ? 'ac-dropdown-arrow--open' : ''}`}>
                        ▼
                    </span>
                </button>
                {isOpen && !disabled && (
                    <ul className="ac-dropdown-menu">
                        {options.map((option) => (
                            <li key={option.value}>
                                <button
                                    type="button"
                                    className={`ac-dropdown-option ${value === option.value ? 'ac-dropdown-option--selected' : ''}`}
                                    onClick={() => handleSelect(option.value)}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {error && <span className="ac-dropdown-error">{error}</span>}
        </div>
    );
};
