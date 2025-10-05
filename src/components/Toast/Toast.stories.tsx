import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './Toast';
import { Button } from '../Button/Button';

const meta: Meta = {
    title: 'Components/Toast',
    tags: ['autodocs'],
};

export default meta;

const ToastDemo = () => {
    const { addToast } = useToast();

    return (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button onClick={() => addToast({ message: 'Success! Operation completed.', type: 'success' })}>
                Show Success
            </Button>
            <Button onClick={() => addToast({ message: 'Error! Something went wrong.', type: 'error' })}>
                Show Error
            </Button>
            <Button onClick={() => addToast({ message: 'Warning! Please be careful.', type: 'warning' })}>
                Show Warning
            </Button>
            <Button onClick={() => addToast({ message: 'Info: Here is some information.', type: 'info' })}>
                Show Info
            </Button>
        </div>
    );
};

export const Default: StoryObj = {
    render: () => (
        <ToastProvider>
            <ToastDemo />
        </ToastProvider>
    ),
};
