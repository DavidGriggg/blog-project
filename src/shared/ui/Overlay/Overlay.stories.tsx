import type { Meta, StoryObj } from "@storybook/react";
import { Overlay } from "./Overlay";

const meta = {
    title: "shared/Overlay",
    component: Overlay,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Overlay>;

type Story = StoryObj<Overlay>;

export const Normal: Story = {
    args: {},
};

export default meta;
