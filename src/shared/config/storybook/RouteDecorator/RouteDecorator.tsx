import { StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouteDecorator = (story: () => StoryObj) => {
    return <BrowserRouter>{story()}</BrowserRouter>;
};
