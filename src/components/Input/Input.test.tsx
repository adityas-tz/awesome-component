import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
    it('renders basic input', () => {
        render(<Input placeholder="Enter text" />);
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders with label', () => {
        render(<Input label="Username" id="username" />);
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('renders with error message', () => {
        render(<Input label="Email" error="Invalid email" />);
        expect(screen.getByText('Invalid email')).toBeInTheDocument();
        const input = screen.getByRole('textbox');
        expect(input).toHaveClass('ac-input--error');
        expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('renders with helper text', () => {
        render(<Input label="Password" helperText="Must be at least 8 characters" />);
        expect(screen.getByText('Must be at least 8 characters')).toBeInTheDocument();
    });

    it('does not show helper text when error is present', () => {
        render(<Input label="Email" error="Invalid email" helperText="Enter your email" />);
        expect(screen.getByText('Invalid email')).toBeInTheDocument();
        expect(screen.queryByText('Enter your email')).not.toBeInTheDocument();
    });

    it('handles input changes', () => {
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} />);
        const input = screen.getByRole('textbox');
        
        fireEvent.change(input, { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalled();
    });

    it('supports disabled state', () => {
        render(<Input disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('applies custom className to wrapper', () => {
        const { container } = render(<Input className="custom-input" />);
        expect(container.querySelector('.ac-input-wrapper')).toHaveClass('custom-input');
    });

    it('supports different input types', () => {
        const { rerender, container } = render(<Input type="email" />);
        expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

        rerender(<Input type="password" />);
        const passwordInput = container.querySelector('input[type="password"]');
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('type', 'password');
    });
});
