import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=1',
        alt: 'User avatar',
    },
};

export const WithInitials: Story = {
    args: {
        initials: 'JD',
    },
};

export const Square: Story = {
    args: {
        initials: 'AC',
        shape: 'square',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Avatar size="sm" initials="SM" />
            <Avatar size="md" initials="MD" />
            <Avatar size="lg" initials="LG" />
        </div>
    ),
};
