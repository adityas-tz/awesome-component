import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
    {
        id: '1',
        title: 'What is React?',
        content: 'React is a JavaScript library for building user interfaces.',
    },
    {
        id: '2',
        title: 'What is TypeScript?',
        content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    },
    {
        id: '3',
        title: 'What is Vite?',
        content: 'Vite is a build tool that aims to provide a faster development experience.',
    },
];

export const Default: Story = {
    args: {
        items,
    },
};

export const AllowMultiple: Story = {
    args: {
        items,
        allowMultiple: true,
    },
};
