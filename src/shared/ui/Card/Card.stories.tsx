import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardTheme } from "./Card";
import { Text } from "@/shared/ui/Text";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../const/theme";

const meta = {
    title: "shared/Card",
    component: Card,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Card>;

type Story = StoryObj<Card>;

export const LightNormal: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
    },
};

export const DarkNormal: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeNormal: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const LightOutlined: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        theme: CardTheme.OUTLINED,
    },
};

export const DarkOutlined: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        theme: CardTheme.OUTLINED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeOutlined: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        theme: CardTheme.OUTLINED,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
