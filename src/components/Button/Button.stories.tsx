import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button/Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        color: {
            options: [undefined, 'success', 'error'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        label: 'Text',
        variant: 'text',
        size: 'small',
        onClick: () => {
            console.log('onClick Text');
        },
        type: 'button',
        isLoading: false,
    },
};

export const Contained: Story = {
    args: {
        label: 'Contained',
        variant: 'contained',
        size: 'medium',
        onClick: () => {
            console.log('onClick Contained');
        },
        type: 'submit',
        isLoading: true,
    },
};

export const Outlined: Story = {
    args: {
        label: 'Outlined',
        variant: 'outlined',
        size: 'large',
        onClick: () => {
            console.log('onClick Outlined');
        },
        type: 'reset',
        isLoading: false,
    },
};
