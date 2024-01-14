import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ProfilePage>;

type Story = StoryObj<ProfilePage>;

export const Light: Story = {
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export default meta;
