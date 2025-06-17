import type { Meta, StoryObj } from "@storybook/react-vite";

import Checkbox from "./Checkbox";

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const On: Story = {
  args: {
    defaultState: true,
    children: "On",
  },
};

export const Off: Story = {
  args: {
    defaultState: false,
    children: "Off",
  },
};
