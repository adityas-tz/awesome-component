import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
    it('renders with children', () => {
        render(<Card>Card content</Card>);
        expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with header', () => {
        render(<Card header="Card Header">Card content</Card>);
        expect(screen.getByText('Card Header')).toBeInTheDocument();
        expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with footer', () => {
        render(<Card footer="Card Footer">Card content</Card>);
        expect(screen.getByText('Card Footer')).toBeInTheDocument();
        expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with header and footer', () => {
        render(
            <Card header="Header" footer="Footer">
                Body content
            </Card>
        );
        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Body content')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<Card className="custom-card">Content</Card>);
        expect(container.querySelector('.ac-card')).toHaveClass('custom-card');
    });

    it('renders without header when not provided', () => {
        const { container } = render(<Card>Content</Card>);
        expect(container.querySelector('.ac-card-header')).not.toBeInTheDocument();
    });

    it('renders without footer when not provided', () => {
        const { container } = render(<Card>Content</Card>);
        expect(container.querySelector('.ac-card-footer')).not.toBeInTheDocument();
    });
});
