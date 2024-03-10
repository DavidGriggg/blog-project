import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Select } from "./Select";
import { Theme } from "../../const/theme";

const meta = {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<Select>;

type Story = StoryObj<Select>;

export const Light: Story = {
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "Первый вариант" },
            { value: "456", content: "Второй вариант" },
            { value: "789", content: "Третий вариант" },
        ],
    },
};

export const LightReadOnly: Story = {
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "Первый вариант" },
            { value: "456", content: "Второй вариант" },
            { value: "789", content: "Третий вариант" },
        ],
        readOnly: true,
    },
};

export const Dark: Story = {
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "Первый вариант" },
            { value: "456", content: "Второй вариант" },
            { value: "789", content: "Третий вариант" },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkReadOnly: Story = {
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "Первый вариант" },
            { value: "456", content: "Второй вариант" },
            { value: "789", content: "Третий вариант" },
        ],
        readOnly: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
