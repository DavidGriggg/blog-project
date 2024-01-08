import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<MainPage>;

type Story = StoryObj<MainPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
