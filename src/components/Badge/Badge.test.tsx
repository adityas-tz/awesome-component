import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
    it('renders with children', () => {
        render(<Badge>New</Badge>);
        expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('renders with default variant and size', () => {
        render(<Badge>Badge</Badge>);
        expect(screen.getByText('Badge')).toHaveClass('ac-badge--primary');
        expect(screen.getByText('Badge')).toHaveClass('ac-badge--md');
    });

    it('renders with different variants', () => {
        const { rerender } = render(<Badge variant="success">Success</Badge>);
        expect(screen.getByText('Success')).toHaveClass('ac-badge--success');

        rerender(<Badge variant="warning">Warning</Badge>);
        expect(screen.getByText('Warning')).toHaveClass('ac-badge--warning');

        rerender(<Badge variant="danger">Danger</Badge>);
        expect(screen.getByText('Danger')).toHaveClass('ac-badge--danger');

        rerender(<Badge variant="info">Info</Badge>);
        expect(screen.getByText('Info')).toHaveClass('ac-badge--info');
    });

    it('renders with different sizes', () => {
        const { rerender } = render(<Badge size="sm">Small</Badge>);
        expect(screen.getByText('Small')).toHaveClass('ac-badge--sm');

        rerender(<Badge size="lg">Large</Badge>);
        expect(screen.getByText('Large')).toHaveClass('ac-badge--lg');
    });
});
