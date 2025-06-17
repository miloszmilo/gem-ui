import type { Meta, StoryObj } from "@storybook/react-vite";

import Toggle from "./Toggle";

const meta = {
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const On: Story = {
  args: {
    defaultState: true,
  },
};
export const Off: Story = {
  args: {
    defaultState: false,
  },
};
export const TextOn: Story = {
  args: {
    defaultState: true,
    onText: "Very on",
  },
};

export const TextOff: Story = {
  args: {
    defaultState: false,
    offText: "Not ON",
  },
};
