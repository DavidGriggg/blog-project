import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "@/shared/const/theme";

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
