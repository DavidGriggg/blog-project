import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "@/shared/Button";

const meta = {
    title: "shared/Popups/Dropdown",
    component: Dropdown,
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
} as Meta<Dropdown>;

type Story = StoryObj<Dropdown>;

const items = [
    {
        content: "first",
    },
    {
        content: "second",
        disabled: true,
    },
    {
        content: "third",
    },
];

export const LightTopLeft: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items,
        direction: "top left",
    },
};

export const LightTopRight: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items,
        direction: "top right",
    },
};

export const LightBottomLeft: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items,
        direction: "bottom left",
    },
};

export const LightBottomRight: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items,
        direction: "bottom right",
    },
};

export default meta;
