import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Toaster } from '@/components/ui/Toaster';
import { Button } from '@/components/ui/Button';
import { toast } from '@/hooks/use-toast';

const meta = {
    title: 'Elements/Toast',
    component: Button,
    decorators: [
        (Story) => (
            <>
                <div>
                    <Story />
                </div>
                <Toaster />
            </>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Button
            onClick={() => {
                toast({
                    title: 'Scheduled: Catch up',
                    description: 'Friday, February 10, 2023 at 5:57 PM'
                });
            }}
        >
            Show Toast
        </Button>
    )
};

export const Destructive: Story = {
    render: () => (
        <Button
            onClick={() => {
                toast({
                    title: 'Scheduled: Catch up',
                    description: 'Friday, February 10, 2023 at 5:57 PM'
                });
            }}
        >
            Show Toast
        </Button>
    )
};
