import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "./Page";

const meta = {
    title: "shared/Page",
    component: Page,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Page>;

type Story = StoryObj<Page>;

export const Light: Story = {
    args: {},
};

export default meta;
