import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
    title: 'Components/TextArea',
    component: TextArea,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        placeholder: 'Enter your message...',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Comments',
        placeholder: 'Share your thoughts...',
    },
};

export const WithError: Story = {
    args: {
        label: 'Description',
        error: 'Description is required',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Bio',
        helperText: 'Tell us about yourself (max 500 characters)',
        maxLength: 500,
    },
};
