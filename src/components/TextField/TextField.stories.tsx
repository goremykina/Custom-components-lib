import type { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';
import React, { useState } from 'react';

const meta: Meta<typeof TextField> = {
    title: 'TextField',
    component: TextField,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
    render: (args) => {
        const [value, setValue] = useState(args.value || '');

        return (
            <TextField
                {...args}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
            />
        );
    },
    args: {
        label: 'Outlined',
        variant: 'outlined',
        placeholder: '',
        value: '',
    },
};

export const Filled: Story = {
    render: (args) => {
        const [value, setValue] = useState(args.value || '');

        return (
            <TextField
                {...args}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
            />
        );
    },
    args: {
        label: 'Filled',
        variant: 'filled',
        placeholder: '',
        value: '',
    },
};

export const Standard: Story = {
    render: (args) => {
        const [value, setValue] = useState(args.value || '');

        return (
            <TextField
                {...args}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
            />
        );
    },
    args: {
        label: 'Standard',
        variant: 'standard',
        placeholder: '',
        value: '',
    },
};
