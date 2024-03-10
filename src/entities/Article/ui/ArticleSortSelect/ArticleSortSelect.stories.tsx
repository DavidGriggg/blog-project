import type { Meta, StoryObj } from "@storybook/react";
import { ArticleSortSelect } from "./ArticleSortSelect";

const meta = {
    title: "shared/ArticleSortSelect",
    component: ArticleSortSelect,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ArticleSortSelect>;

type Story = StoryObj<ArticleSortSelect>;

export const Light: Story = {
    args: {},
};

export default meta;
