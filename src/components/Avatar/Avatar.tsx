import React from 'react';
import './Avatar.css';

export interface AvatarProps {
    src?: string;
    alt?: string;
    initials?: string;
    size?: 'sm' | 'md' | 'lg';
    shape?: 'circle' | 'square';
}

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    initials,
    size = 'md',
    shape = 'circle',
}) => {
    return (
        <div className={`ac-avatar ac-avatar--${size} ac-avatar--${shape}`}>
            {src ? (
                <img src={src} alt={alt} className="ac-avatar-image" />
            ) : (
                <span className="ac-avatar-initials">{initials || '?'}</span>
            )}
        </div>
    );
};
