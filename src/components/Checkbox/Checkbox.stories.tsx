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
    render: (args) => {
        return <Checkbox {...args} />;
    },
    args: {
        label: 'Click',
        disabled: false,
        value: '',
        color: 'pink',
    },
};

export const Size: Story = {
    render: (args) => {
        return <Checkbox {...args} />;
    },
    args: {
        label: 'Click',
        disabled: false,
        value: '',
        size: 'small',
    },
};

export const Checked: Story = {
    render: (args) => {
        return <Checkbox {...args} />;
    },
    args: {
        label: '',
        checked: true,
        value: '',
    },
};
