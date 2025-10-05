import React, { useState } from 'react';
import './Accordion.css';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="ac-accordion">
      {items.map((item) => (
        <div key={item.id} className="ac-accordion-item">
          <button
            className="ac-accordion-header"
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItems.includes(item.id)}
          >
            <span>{item.title}</span>
            <span className={`ac-accordion-icon ${openItems.includes(item.id) ? 'ac-accordion-icon--open' : ''}`}>
              ▼
            </span>
          </button>
          {openItems.includes(item.id) && (
            <div className="ac-accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
