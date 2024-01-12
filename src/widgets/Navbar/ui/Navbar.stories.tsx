import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Navbar } from "./Navbar";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Navbar>;

type Story = StoryObj<Navbar>;

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
