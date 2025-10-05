import React, { useState } from 'react';
import './Tabs.css';

export interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

export interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    return (
        <div className="ac-tabs">
            <div className="ac-tabs-header" role="tablist">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`ac-tabs-tab ${activeTab === tab.id ? 'ac-tabs-tab--active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="ac-tabs-content">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};
