import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Navbar } from "./Navbar";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Navbar>;

type Story = StoryObj<Navbar>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
