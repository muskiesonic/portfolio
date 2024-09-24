import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

const meta = {
    title: 'Elements/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Input text...'
    }
};

export const WithLabel: Story = {
    render: (args) => (
        <div>
            <Label htmlFor="sample-input">Label</Label>
            <Input id="sample-input" {...args} />
        </div>
    ),
    args: {
        placeholder: 'Input text...'
    }
};
