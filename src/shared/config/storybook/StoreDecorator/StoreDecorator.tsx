import { StoryObj } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>) =>
    (StoryComponent: () => StoryObj) => {
        return (
            <StoreProvider initialState={initialState}>
                <StoryComponent />
            </StoreProvider>
        );
    };
