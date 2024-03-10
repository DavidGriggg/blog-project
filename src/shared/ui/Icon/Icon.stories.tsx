import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Icon } from "./Icon";
import ListIcon from "@/shared/assets/icons/list.svg";
import { Theme } from "../../const/theme";

const meta = {
    title: "shared/Icon",
    component: Icon,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<Icon>;

type Story = StoryObj<Icon>;

export const Light: Story = {
    args: {
        Svg: ListIcon,
    },
};

export const Dark: Story = {
    args: {
        Svg: ListIcon,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    args: {
        Svg: ListIcon,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const LightInverted: Story = {
    args: {
        Svg: ListIcon,
        inverted: true,
    },
};

export const DarkInverted: Story = {
    args: {
        Svg: ListIcon,
        inverted: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeInverted: Story = {
    args: {
        Svg: ListIcon,
        inverted: true,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
