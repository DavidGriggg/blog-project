import type { Meta, StoryObj } from "@storybook/react";
import { ArticlesPageFilters } from "./ArticlesPageFilters";

const meta = {
    title: "shared/ArticlesPageFilters",
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ArticlesPageFilters>;

type Story = StoryObj<ArticlesPageFilters>;

export const Light: Story = {
    args: {},
};

export default meta;
