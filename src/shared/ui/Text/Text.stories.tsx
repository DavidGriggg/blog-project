import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text as IText, TextAlign, TextTheme } from "./Text";

const meta = {
    title: "shared/Text",
    component: IText,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<IText>;

type Story = StoryObj<IText>;

export const Primary: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
    },
};

export const Error: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: "Some title",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Some text Some text Some text",
    },
};

export const PrimaryDark: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: "Some title",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: "Some text Some text Some text",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const AlignLeft: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        align: TextAlign.LEFT,
    },
};

export const AlignRight: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        align: TextAlign.RIGHT,
    },
};

export const AlignCenter: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        align: TextAlign.CENTER,
    },
};

export default meta;
