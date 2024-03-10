import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Avatar } from "./Avatar";
import AvatarImage from "@/shared/assets/images/avatar.webp";
import { Theme } from "../../const/theme";

const meta = {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<Avatar>;

type Story = StoryObj<Avatar>;

export const Small: Story = {
    args: {
        src: AvatarImage,
        size: 50,
    },
};

export const SmallDark: Story = {
    args: {
        src: AvatarImage,
        size: 50,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SmallOrange: Story = {
    args: {
        src: AvatarImage,
        size: 50,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const Medium: Story = {
    args: {
        src: AvatarImage,
        size: 100,
    },
};

export const MediumDark: Story = {
    args: {
        src: AvatarImage,
        size: 100,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const MediumOrange: Story = {
    args: {
        src: AvatarImage,
        size: 100,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const Big: Story = {
    args: {
        src: AvatarImage,
        size: 150,
    },
};

export const BigDark: Story = {
    args: {
        src: AvatarImage,
        size: 150,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BigOrange: Story = {
    args: {
        src: AvatarImage,
        size: 150,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
