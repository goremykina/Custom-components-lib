import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';
import React from 'react';

const meta: Meta<typeof Switch> = {
    title: 'Switch',
    component: Switch,
    argTypes: {
        color: {
            options: [undefined, 'orange', 'purple'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        return (
            <Switch
                onChange={function (
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void {
                    throw new Error('Function not implemented.');
                }}
                {...args}
            />
        );
    },
    args: {
        disabled: false,
        color: 'purple',
        checked: true,
    },
};

export const Disabled: Story = {
    render: (args) => {
        return (
            <Switch
                onChange={function (
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void {
                    throw new Error('Function not implemented.');
                }}
                {...args}
            />
        );
    },
    args: {
        disabled: true,
        size: 'small',
    },
};
export const DefaultChecked: Story = {
    render: (args) => {
        return (
            <Switch
                onChange={function (
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void {
                    throw new Error('Function not implemented.');
                }}
                {...args}
            />
        );
    },
    args: {
        disabled: false,
        size: 'large',
        checked: true,
    },
};
