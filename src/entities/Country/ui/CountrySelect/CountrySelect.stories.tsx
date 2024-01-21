import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CountrySelect } from "./CountrySelect";

const meta = {
    title: "entities/CountrySelect",
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<CountrySelect>;

type Story = StoryObj<CountrySelect>;

export const Light: Story = {
    args: {},
};

export const LightReadOnly: Story = {
    args: {
        readOnly: true,
    },
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkReadOnly: Story = {
    args: {
        readOnly: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
