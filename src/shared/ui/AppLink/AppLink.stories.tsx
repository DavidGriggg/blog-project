import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";
import { Theme } from "@/shared/const/theme";

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

export const PrimaryLight: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryLightWithTargetBlank: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
        target: "_blank",
    },
};

export const PrimaryDark: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryOrange: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const SecondaryLight: Story = {
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

export const SecondaryOrange: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
