import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ForbiddenPage from "./ForbiddenPage";
import { Theme } from "../../../shared/const/theme";

const meta = {
    title: "pages/ForbiddenPage",
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ForbiddenPage>;

type Story = StoryObj<ForbiddenPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
