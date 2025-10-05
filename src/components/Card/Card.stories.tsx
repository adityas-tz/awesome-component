import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: 'This is a simple card with just body content.',
    },
};

export const WithHeader: Story = {
    args: {
        header: 'Card Title',
        children: 'This card has a header.',
    },
};

export const Complete: Story = {
    args: {
        header: 'User Profile',
        children: (
            <div>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john@example.com</p>
                <p><strong>Role:</strong> Developer</p>
            </div>
        ),
        footer: <Button variant="primary">Edit Profile</Button>,
    },
};
