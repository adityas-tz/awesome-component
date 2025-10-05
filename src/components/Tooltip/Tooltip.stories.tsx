import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
    args: {
        content: 'This is a tooltip',
        position: 'top',
        children: <Button>Hover me (Top)</Button>,
    },
};

export const Bottom: Story = {
    args: {
        content: 'This is a tooltip',
        position: 'bottom',
        children: <Button>Hover me (Bottom)</Button>,
    },
};

export const Left: Story = {
    args: {
        content: 'This is a tooltip',
        position: 'left',
        children: <Button>Hover me (Left)</Button>,
    },
};

export const Right: Story = {
    args: {
        content: 'This is a tooltip',
        position: 'right',
        children: <Button>Hover me (Right)</Button>,
    },
};
