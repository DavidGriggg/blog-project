import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "shared/Drawer",
    component: Drawer,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Drawer>;

type Story = StoryObj<Drawer>;

export const Light: Story = {
    args: {
        children: <div>Some text</div>,
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children: <div>Some text</div>,
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    args: {
        children: <div>Some text</div>,
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
