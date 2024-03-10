import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import AvatarImage from "@/shared/assets/images/avatar.webp";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ProfilePage>;

type Story = StoryObj<ProfilePage>;

const data = {
    profile: {
        form: {
            username: "hansen",
            age: 25,
            country: Country.Spain,
            lastname: "Hansen",
            first: "Caroline",
            city: "Barcelona",
            currency: Currency.EUR,
            avatar: AvatarImage,
        },
    },
};

export const Light: Story = {
    decorators: [StoreDecorator(data)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(data)],
};

export default meta;
