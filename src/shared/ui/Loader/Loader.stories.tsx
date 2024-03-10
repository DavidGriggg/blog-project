import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Loader } from "./Loader";
import { Theme } from "@/shared/const/theme";

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

export const Orange: Story = {
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
