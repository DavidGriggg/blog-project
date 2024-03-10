import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Modal>;

type Story = StoryObj<Modal>;

const children = (
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elBeatae, expedita
        fuga laudantium mollitia nesciunt quam quasquia rerum sit soluta
    </div>
);

export const Light: Story = {
    args: {
        isOpen: true,
        children,
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    args: {
        isOpen: true,
        children,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
