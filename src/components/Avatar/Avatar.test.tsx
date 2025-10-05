import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
    it('renders with image when src is provided', () => {
        render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
        expect(img).toHaveAttribute('alt', 'User Avatar');
    });

    it('renders with initials when no src is provided', () => {
        render(<Avatar initials="AB" />);
        expect(screen.getByText('AB')).toBeInTheDocument();
    });

    it('renders with default question mark when no src or initials', () => {
        render(<Avatar />);
        expect(screen.getByText('?')).toBeInTheDocument();
    });

    it('renders with different sizes', () => {
        const { rerender, container } = render(<Avatar initials="AB" size="sm" />);
        expect(container.querySelector('.ac-avatar')).toHaveClass('ac-avatar--sm');

        rerender(<Avatar initials="AB" size="md" />);
        expect(container.querySelector('.ac-avatar')).toHaveClass('ac-avatar--md');

        rerender(<Avatar initials="AB" size="lg" />);
        expect(container.querySelector('.ac-avatar')).toHaveClass('ac-avatar--lg');
    });

    it('renders with different shapes', () => {
        const { rerender, container } = render(<Avatar initials="AB" shape="circle" />);
        expect(container.querySelector('.ac-avatar')).toHaveClass('ac-avatar--circle');

        rerender(<Avatar initials="AB" shape="square" />);
        expect(container.querySelector('.ac-avatar')).toHaveClass('ac-avatar--square');
    });

    it('defaults to medium size and circle shape', () => {
        const { container } = render(<Avatar initials="AB" />);
        const avatar = container.querySelector('.ac-avatar');
        expect(avatar).toHaveClass('ac-avatar--md');
        expect(avatar).toHaveClass('ac-avatar--circle');
    });
});
