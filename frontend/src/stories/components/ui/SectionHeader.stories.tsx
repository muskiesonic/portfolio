import type { Meta, StoryObj } from '@storybook/react';

import { SectionHeader } from '@/components/ui/SectionHeader';

const meta = {
    title: 'Elements/SectionHeader',
    component: SectionHeader,
    parameters: {
        layout: 'padded'
    }
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Let's get in touch!"
    }
};

export const WithSubtitle: Story = {
    args: {
        title: "Let's get in touch!",
        subtitle: 'Hit me up with the form below and I will be in touch ASAP 🍻'
    }
};
