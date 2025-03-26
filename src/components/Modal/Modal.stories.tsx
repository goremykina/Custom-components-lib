import type { Meta, StoryObj } from '@storybook/react';
import styles from './Modal.module.scss';

import Modal from './Modal';
import React, { useEffect, useState } from 'react';

const meta: Meta<typeof Modal> = {
    title: 'Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.open || false);

        useEffect(() => {
            setIsOpen(args.open);
        }, [args.open]);
        console.log(isOpen);

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
        open: false,
        title: 'Modal',
        children: (
            <>
                <h2>Header</h2>
                <p>This is a modal window</p>
            </>
        ),
    },
};
