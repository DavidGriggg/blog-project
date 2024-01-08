import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<AppLink>;

type Story = StoryObj<AppLink>;

export const Primary: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
