import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        tabs: [
            { id: 'tab1', label: 'Tab 1', content: <div>Content for Tab 1</div> },
            { id: 'tab2', label: 'Tab 2', content: <div>Content for Tab 2</div> },
            { id: 'tab3', label: 'Tab 3', content: <div>Content for Tab 3</div> },
        ],
    },
};

export const WithRichContent: Story = {
    args: {
        tabs: [
            {
                id: 'overview',
                label: 'Overview',
                content: (
                    <div>
                        <h3>Overview</h3>
                        <p>This is the overview section with detailed information.</p>
                    </div>
                ),
            },
            {
                id: 'details',
                label: 'Details',
                content: (
                    <div>
                        <h3>Details</h3>
                        <ul>
                            <li>Detail 1</li>
                            <li>Detail 2</li>
                            <li>Detail 3</li>
                        </ul>
                    </div>
                ),
            },
            {
                id: 'settings',
                label: 'Settings',
                content: (
                    <div>
                        <h3>Settings</h3>
                        <p>Configure your preferences here.</p>
                    </div>
                ),
            },
        ],
    },
};
