import type { Meta, StoryObj } from "@storybook/react";
import { IListBox, ListBoxItem } from "./IListBox";

const meta = {
    title: "shared/Popups/ListBox",
    component: IListBox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 200 }}>
                <Story />
            </div>
        ),
    ],
} as Meta<IListBox>;

type Story = StoryObj<IListBox>;

const items: ListBoxItem[] = [
    {
        value: "first",
        content: "first",
    },
    {
        value: "second",
        content: "second",
    },
    {
        value: "third",
        content: "third",
    },
];

export const Normal: Story = {
    args: {
        items,
        value: "first",
    },
};

export const Disabled: Story = {
    args: {
        items,
        value: "first",
        disabled: true,
    },
};

export const TopLeft: Story = {
    args: {
        items,
        value: "first",
        direction: "top left",
    },
};

export const TopRight: Story = {
    args: {
        items,
        value: "first",
        direction: "top right",
    },
};

export const BottomLeft: Story = {
    args: {
        items,
        value: "first",
        direction: "bottom left",
    },
};

export const BottomRight: Story = {
    args: {
        items,
        value: "first",
        direction: "bottom right",
    },
};

export default meta;
