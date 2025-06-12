import type { Meta, StoryObj } from '@storybook/react-vite';

import Carousel from './Carousel';

const meta = {
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultItems: ["../../../public/images/alexander-mass-0x8gG5t9dsc-unsplash.jpg", "../../../public/images/richard-stachmann-wUKrO7kLWe-U-unsplash.jpg"]
  }
};

export const Empty: Story = {
  args: {
    defaultItems: []
  }
};
