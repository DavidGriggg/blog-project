import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<LoginForm>;

type Story = StoryObj<LoginForm>;

export const Light: Story = {
    decorators: [
        StoreDecorator({ loginForm: { username: "admin", password: "123" } }),
    ],
};

export const LightWithError: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "admin",
                password: "123",
                error: "Some error",
            },
        }),
    ],
};

export const LightLoading: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "admin",
                password: "123",
                isLoading: true,
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({ loginForm: { username: "admin", password: "123" } }),
    ],
};

export const DarkWithError: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: "admin",
                password: "123",
                error: "Some error",
            },
        }),
    ],
};

export const DarkLoading: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: "admin",
                password: "123",
                isLoading: true,
            },
        }),
    ],
};

export default meta;
