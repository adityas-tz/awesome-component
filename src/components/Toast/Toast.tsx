import React, { createContext, useContext, useState, useCallback } from 'react';
import './Toast.css';

export interface ToastProps {
    id: string;
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
}

interface ToastContextType {
    toasts: ToastProps[];
    addToast: (toast: Omit<ToastProps, 'id'>) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const addToast = useCallback((toast: Omit<ToastProps, 'id'>) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = { ...toast, id };
        setToasts((prev) => [...prev, newToast]);

        const duration = toast.duration || 3000;
        setTimeout(() => {
            removeToast(id);
        }, duration);
    }, [removeToast]);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <div className="ac-toast-container">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`ac-toast ac-toast--${toast.type || 'info'}`}
                    >
                        <span>{toast.message}</span>
                        <button
                            className="ac-toast-close"
                            onClick={() => removeToast(toast.id)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

export const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
    return (
        <div className={`ac-toast ac-toast--${type}`}>
            <span>{message}</span>
        </div>
    );
};
