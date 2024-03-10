import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../const/theme";

const meta = {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Code>;

type Story = StoryObj<Code>;

export const Light: Story = {
    args: {
        text: "let a; \nlet b; \nlet c = a + b;",
    },
};

export const Dark: Story = {
    args: {
        text: "let a; \nlet b; \nlet c = a + b;",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    args: {
        text: "let a; \nlet b; \nlet c = a + b;",
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export default meta;
