import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import MainPage from "./MainPage";
import { Theme } from "@/shared/const/theme";

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
