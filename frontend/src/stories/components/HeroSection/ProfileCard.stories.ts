import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from '@/components/HeroSection';

const meta = {
    title: 'HeroSection/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'padded'
    }
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
