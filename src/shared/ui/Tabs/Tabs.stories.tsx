import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { action } from "@storybook/addon-actions";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "shared/Tabs",
    component: Tabs,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Tabs>;

type Story = StoryObj<Tabs>;

const tabs = [
    {
        value: "tab 1",
        content: "tab 1",
    },
    {
        value: "tab 2",
        content: "tab 2",
    },
    {
        value: "tab 3",
        content: "tab 3",
    },
];

export const Light: Story = {
    args: {
        tabs,
        value: "tab 2",
        onTabClick: action("onTabClick"),
    },
};

export const Dark: Story = {
    args: {
        tabs,
        value: "tab 2",
        onTabClick: action("onTabClick"),
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    args: {
        tabs,
        value: "tab 2",
        onTabClick: action("onTabClick"),
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
