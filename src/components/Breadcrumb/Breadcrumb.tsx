import React from 'react';
import './Breadcrumb.css';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    onClick?: () => void;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = '/' }) => {
    return (
        <nav className="ac-breadcrumb" aria-label="Breadcrumb">
            <ol className="ac-breadcrumb-list">
                {items.map((item, index) => (
                    <li key={index} className="ac-breadcrumb-item">
                        {index < items.length - 1 ? (
                            <>
                                {item.href ? (
                                    <a href={item.href} className="ac-breadcrumb-link">
                                        {item.label}
                                    </a>
                                ) : item.onClick ? (
                                    <button onClick={item.onClick} className="ac-breadcrumb-button">
                                        {item.label}
                                    </button>
                                ) : (
                                    <span>{item.label}</span>
                                )}
                                <span className="ac-breadcrumb-separator" aria-hidden="true">
                                    {separator}
                                </span>
                            </>
                        ) : (
                            <span className="ac-breadcrumb-current" aria-current="page">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};
