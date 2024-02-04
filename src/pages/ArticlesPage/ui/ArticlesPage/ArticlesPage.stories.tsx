import type { Meta, StoryObj } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";

const meta = {
    title: "shared/ArticlesPage",
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ArticlesPage>;

type Story = StoryObj<ArticlesPage>;

export const Light: Story = {
    args: {},
};

export default meta;
