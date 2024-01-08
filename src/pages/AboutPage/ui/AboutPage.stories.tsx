import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AboutPage from "./AboutPage";

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<AboutPage>;

type Story = StoryObj<AboutPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
