import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Sidebar>;

type Story = StoryObj<Sidebar>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
