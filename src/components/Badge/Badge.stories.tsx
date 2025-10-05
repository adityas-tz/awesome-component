import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Success',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Danger',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
        </div>
    ),
};
