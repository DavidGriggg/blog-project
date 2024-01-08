import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { NotFoundPage } from "./NotFoundPage";

const meta = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<NotFoundPage>;

type Story = StoryObj<NotFoundPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
