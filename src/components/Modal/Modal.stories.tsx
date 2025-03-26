import type { Meta, StoryObj } from '@storybook/react';
import styles from './Modal.module.scss';

import Modal from './Modal';
import React, { useState } from 'react';

const meta: Meta<typeof Modal> = {
    title: 'Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <button
                    className={styles.buttonOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Open Modal
                </button>
                <Modal
                    {...args}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </>
        );
    },
    args: {
        title: 'Modal',
        children: [
            React.createElement('h2', {}, 'Header'),
            React.createElement('p', {}, 'This is a modal window'),
        ],
    },
};
