import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "@/shared/ui/Button";

const meta = {
    title: "shared/Popups/Popover",
    component: Popover,
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
} as Meta<Popover>;

type Story = StoryObj<Popover>;

export const Normal: Story = {
    args: {
        trigger: <Button>Open</Button>,
        children: <div>some text</div>,
    },
};

export const TopLeft: Story = {
    args: {
        trigger: <Button>Open</Button>,
        children: <div>some text</div>,
        direction: "top left",
    },
};

export const TopRight: Story = {
    args: {
        trigger: <Button>Open</Button>,
        children: <div>some text</div>,
        direction: "top right",
    },
};

export const BottomLeft: Story = {
    args: {
        trigger: <Button>Open</Button>,
        children: <div>some text</div>,
        direction: "bottom left",
    },
};

export const BottomRight: Story = {
    args: {
        trigger: <Button>Open</Button>,
        children: <div>some text</div>,
        direction: "bottom right",
    },
};

export default meta;
