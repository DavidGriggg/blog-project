import { StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouteDecorator = (StoryComponent: StoryObj) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    );
};
