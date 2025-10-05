import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: function DefaultRender() {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
                    <p>This is the modal content. Click outside or press Escape to close.</p>
                </Modal>
            </>
        );
    },
};

export const WithForm: Story = {
    render: function WithFormRender() {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="User Registration">
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label>Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.5rem' }} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" style={{ width: '100%', padding: '0.5rem' }} />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </Modal>
            </>
        );
    },
};
