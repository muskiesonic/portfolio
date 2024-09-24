import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@/components/ui/Button';

const meta = {
    title: 'Elements/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        variant: { control: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
        size: { control: 'select', options: ['default', 'icon', 'lg', 'sm'] }
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => <Button {...args}>Button</Button>,
    args: {
        variant: 'default',
        size: 'default'
    }
};

export const Secondary: Story = {
    render: (args) => <Button {...args}>Button</Button>,
    args: {
        variant: 'secondary',
        size: 'default'
    }
};

export const Outline: Story = {
    render: (args) => <Button {...args}>Button</Button>,
    args: {
        variant: 'outline',
        size: 'default'
    }
};

export const Ghost: Story = {
    render: (args) => <Button {...args}>Button</Button>,
    args: {
        variant: 'ghost',
        size: 'default'
    }
};

export const Desctructive: Story = {
    render: (args) => <Button {...args}>Button</Button>,
    args: {
        variant: 'destructive',
        size: 'default'
    }
};

export const LinkButton: Story = {
    render: (args) => <Button {...args}>Button</Button>,
    args: {
        variant: 'link',
        size: 'default'
    }
};
