import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ProfileCard } from "./ProfileCard";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import AvatarImage from "@/shared/assets/images/avatar.webp";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ProfileCard>;

type Story = StoryObj<ProfileCard>;

const data = {
    username: "hansen",
    age: 25,
    country: Country.Spain,
    lastname: "Hansen",
    first: "Caroline",
    city: "Barcelona",
    currency: Currency.EUR,
    avatar: AvatarImage,
};

export const LightEditing: Story = {
    args: {
        data,
    },
};

export const LightReadOnly: Story = {
    args: {
        data,
        readOnly: true,
    },
};

export const LightWithError: Story = {
    args: {
        error: "Some error",
    },
};

export const LightIsLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const DarkEditing: Story = {
    args: {
        data,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkReadOnly: Story = {
    args: {
        data,
        readOnly: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkWithError: Story = {
    args: {
        error: "Some error",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkIsLoading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
