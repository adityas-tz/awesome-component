import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter username',
        helperText: 'Must be at least 3 characters',
    },
};

export const WithError: Story = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
        error: 'Password is required',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        placeholder: 'Cannot edit',
        disabled: true,
    },
};

export const Number: Story = {
    args: {
        label: 'Age',
        type: 'number',
        placeholder: 'Enter your age',
    },
};
