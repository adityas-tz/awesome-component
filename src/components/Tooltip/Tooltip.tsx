import React, { useState } from 'react';
import './Tooltip.css';

export interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="ac-tooltip-wrapper"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={`ac-tooltip ac-tooltip--${position}`} role="tooltip">
                    {content}
                </div>
            )}
        </div>
    );
};
