import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
    args: {
        items: [
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Category', href: '/products/category' },
            { label: 'Item' },
        ],
    },
};

export const WithCustomSeparator: Story = {
    args: {
        separator: '>',
        items: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Settings', href: '/settings' },
            { label: 'Profile' },
        ],
    },
};

export const WithClickHandlers: Story = {
    args: {
        items: [
            { label: 'Home', onClick: () => alert('Home clicked') },
            { label: 'About', onClick: () => alert('About clicked') },
            { label: 'Contact' },
        ],
    },
};
