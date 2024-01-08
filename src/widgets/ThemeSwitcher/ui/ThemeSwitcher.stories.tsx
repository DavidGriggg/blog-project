import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ThemeSwitcher>;

type Story = StoryObj<ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
