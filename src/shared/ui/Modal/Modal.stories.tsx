import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../../app/providers/ThemeProvider";

const meta = {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Modal>;

type Story = StoryObj<Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elBeatae, expedita fuga laudantium mollitia nesciunt quam quasquia rerum sit soluta",
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elBeatae, expedita fuga laudantium mollitia nesciunt quam quasquia rerum sit soluta",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
