import type { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "./StarRating";

const meta = {
    title: "shared/StarRating",
    component: StarRating,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<StarRating>;

type Story = StoryObj<StarRating>;

export const Light: Story = {
    args: {},
};

export default meta;
