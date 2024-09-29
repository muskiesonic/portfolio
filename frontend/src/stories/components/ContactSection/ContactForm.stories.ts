import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from '@/components/ContactSection';

const meta = {
    title: 'ContactSection/ContactForm',
    component: ContactForm,
    parameters: {
        layout: 'padded'
    }
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
