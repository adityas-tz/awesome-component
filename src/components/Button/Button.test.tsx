import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('renders with default props', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('ac-button--primary');
        expect(button).toHaveClass('ac-button--md');
    });

    it('renders with different variants', () => {
        const { rerender } = render(<Button variant="secondary">Button</Button>);
        expect(screen.getByRole('button')).toHaveClass('ac-button--secondary');

        rerender(<Button variant="outline">Button</Button>);
        expect(screen.getByRole('button')).toHaveClass('ac-button--outline');

        rerender(<Button variant="danger">Button</Button>);
        expect(screen.getByRole('button')).toHaveClass('ac-button--danger');
    });

    it('renders with different sizes', () => {
        const { rerender } = render(<Button size="sm">Button</Button>);
        expect(screen.getByRole('button')).toHaveClass('ac-button--sm');

        rerender(<Button size="lg">Button</Button>);
        expect(screen.getByRole('button')).toHaveClass('ac-button--lg');
    });

    it('handles disabled state', () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('handles click events', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
        const handleClick = vi.fn();
        render(<Button disabled onClick={handleClick}>Disabled</Button>);
        
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<Button className="custom-class">Button</Button>);
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });
});
