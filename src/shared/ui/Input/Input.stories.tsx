import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Input } from "./Input";
import { Theme } from "@/shared/const/theme";

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
    },
};

export const LightAutofocus: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        autofocus: true,
    },
};

export const LightReadOnly: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        readOnly: true,
    },
};

export const Dark: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
