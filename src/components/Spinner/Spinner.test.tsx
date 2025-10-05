import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
    it('renders with default props', () => {
        render(<Spinner />);
        const spinner = screen.getByRole('status');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveClass('ac-spinner--md');
    });

    it('renders with different sizes', () => {
        const { rerender } = render(<Spinner size="sm" />);
        expect(screen.getByRole('status')).toHaveClass('ac-spinner--sm');

        rerender(<Spinner size="lg" />);
        expect(screen.getByRole('status')).toHaveClass('ac-spinner--lg');
    });

    it('applies custom color', () => {
        render(<Spinner color="#ff0000" />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveStyle({ borderTopColor: '#ff0000' });
    });

    it('has accessible loading text', () => {
        render(<Spinner />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('has correct aria-label', () => {
        render(<Spinner />);
        expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading');
    });
});
