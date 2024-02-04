import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Text } from "shared/ui/Text/Text";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../../app/providers/ThemeProvider";

const meta = {
    title: "shared/Card",
    component: Card,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Card>;

type Story = StoryObj<Card>;

export const Light: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
    },
};

export const Dark: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
