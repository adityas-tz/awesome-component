import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Modal } from '../components/Modal/Modal';
import { Card } from '../components/Card/Card';
import { Badge } from '../components/Badge/Badge';
import { Spinner } from '../components/Spinner/Spinner';
import { Tabs } from '../components/Tabs/Tabs';
import { ToastProvider, useToast } from '../components/Toast/Toast';
import '../styles/index.css';

export const DemoApp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addToast } = useToast();

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Awesome Components Demo</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Buttons</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="danger">Danger</Button>
                    <Button disabled>Disabled</Button>
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Inputs</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
                    <Input label="Email" type="email" placeholder="Enter your email" />
                    <Input label="Password" type="password" placeholder="Enter password" error="Password is required" />
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Modal</h2>
                <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Demo Modal">
                    <p>This is a demo modal. You can put any content here!</p>
                </Modal>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Cards</h2>
                <Card header="User Profile" footer={<Button variant="primary">Edit</Button>}>
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john@example.com</p>
                </Card>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Badges</h2>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="warning">Warning</Badge>
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Spinner</h2>
                <Spinner />
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Toast Notifications</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button onClick={() => addToast({ message: 'Success!', type: 'success' })}>
                        Show Success
                    </Button>
                    <Button onClick={() => addToast({ message: 'Error!', type: 'error' })}>
                        Show Error
                    </Button>
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Tabs</h2>
                <Tabs
                    tabs={[
                        { id: '1', label: 'Tab 1', content: <div>Content for Tab 1</div> },
                        { id: '2', label: 'Tab 2', content: <div>Content for Tab 2</div> },
                        { id: '3', label: 'Tab 3', content: <div>Content for Tab 3</div> },
                    ]}
                />
            </section>
        </div>
    );
};

export const App = () => (
    <ToastProvider>
        <DemoApp />
    </ToastProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
