import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@/components/ui/Label';

const meta = {
    title: 'Elements/Label',
    component: Label,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Label>Label</Label>
};
