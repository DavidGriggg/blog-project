import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Loader } from "./Loader";

const meta = {
    title: "shared/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Loader>;

type Story = StoryObj<Loader>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
