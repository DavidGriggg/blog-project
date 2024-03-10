import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Skeleton>;

type Story = StoryObj<Skeleton>;

export const RectangleLight: Story = {
    args: {
        width: "100%",
        height: 200,
    },
};

export const RectangleDark: Story = {
    args: {
        width: "100%",
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleLight: Story = {
    args: {
        borderRadius: "50%",
        width: 100,
        height: 100,
    },
};

export const CircleDark: Story = {
    args: {
        width: "100%",
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
