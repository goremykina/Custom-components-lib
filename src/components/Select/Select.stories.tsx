import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';
import React, { useEffect, useState } from 'react';

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState(args.value || '');

        useEffect(() => {
            setSelectedValue(args.value);
        }, [args.value]);

        return (
            <Select
                {...args}
                value={selectedValue}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectedValue(e.target.value)
                }
            />
        );
    },
    args: {
        label: 'Choose an option',
        value: '',
        options: ['', 'Apple', 'Kivi', 'Banana', 'Orange', 'Mango'],
    },
};
