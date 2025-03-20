import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        color: {
            options: [undefined, 'green', 'pink'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Click',
        disabled: false,
    },
};

export const Size: Story = {
    args: {
        label: 'Click',
        disabled: false,
    },
};

export const Checked: Story = {
    args: {
        label: 'Click',
        disabled: true,
    },
};
