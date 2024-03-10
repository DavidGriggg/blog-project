import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { LangSwitcher } from "./LangSwitcher";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "widgets/LangSwitcher",
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<LangSwitcher>;

type Story = StoryObj<LangSwitcher>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
