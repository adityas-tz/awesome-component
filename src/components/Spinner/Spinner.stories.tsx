import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    args: {},
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
        </div>
    ),
};

export const CustomColor: Story = {
    args: {
        color: '#ef4444',
    },
};
