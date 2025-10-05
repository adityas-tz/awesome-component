import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    render: function DefaultRender() {
        const [page, setPage] = useState(1);
        return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
    },
};

export const ManyPages: Story = {
    render: function ManyPagesRender() {
        const [page, setPage] = useState(5);
        return <Pagination currentPage={page} totalPages={50} onPageChange={setPage} />;
    },
};

export const WithoutFirstLast: Story = {
    render: function WithoutFirstLastRender() {
        const [page, setPage] = useState(1);
        return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} showFirstLast={false} />;
    },
};
