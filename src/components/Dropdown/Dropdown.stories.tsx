import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
];

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return <Dropdown options={options} value={value} onChange={setValue} />;
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return <Dropdown label="Select a fruit" options={options} value={value} onChange={setValue} />;
    },
};

export const WithError: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <Dropdown
                label="Fruit"
                options={options}
                value={value}
                onChange={setValue}
                error="Please select a fruit"
            />
        );
    },
};
