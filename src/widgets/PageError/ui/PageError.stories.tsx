import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";

const meta = {
    title: "widgets/PageError",
    component: PageError,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<PageError>;

type Story = StoryObj<PageError>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
