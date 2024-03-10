import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta = {
    title: "shared/Flex",
    component: Flex,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Flex>;

type Story = StoryObj<Flex>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        gap: "4",
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export const RowGap8: Story = {
    args: {
        gap: "8",
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        gap: "16",
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export const RowGap32: Story = {
    args: {
        gap: "32",
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: "column",
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export const ColumnGap4: Story = {
    args: {
        gap: "4",
        direction: "column",
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export const ColumnGap8: Story = {
    args: {
        gap: "8",
        direction: "column",
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        gap: "16",
        direction: "column",
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export const ColumnGap32: Story = {
    args: {
        gap: "32",
        direction: "column",
        children: (
            <>
                <div>element 1</div>
                <div>element 2</div>
                <div>element 3</div>
                <div>element 4</div>
            </>
        ),
    },
};

export default meta;
