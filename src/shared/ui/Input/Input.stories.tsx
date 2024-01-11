import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Input } from "./Input";

const meta = {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Input>;

type Story = StoryObj<Input>;

export const Light: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        autofocus: true,
    },
};

export const Dark: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        autofocus: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
