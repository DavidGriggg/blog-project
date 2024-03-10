import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Sidebar>;

type Story = StoryObj<Sidebar>;

export const LightLoggedOut: Story = {
    decorators: [StoreDecorator({})],
};

export const LightLoggedIn: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {},
            },
        }),
    ],
};

export const DarkLoggedOut: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const DarkLoggedIn: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {},
            },
        }),
    ],
};

export default meta;
