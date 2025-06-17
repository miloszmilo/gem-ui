import type { Meta, StoryObj } from "@storybook/react-vite";

import Accordion from "./Accordion";

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    heading: "Closed",
    children: "this would be closed",
  },
};
export const Open: Story = {
  args: {
    heading: "Open",
    children: "this is open by default",
    defaultState: true,
  },
};

