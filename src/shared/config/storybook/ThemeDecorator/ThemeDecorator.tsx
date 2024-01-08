import { StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator =
    (theme: Theme) => (StoryComponent: () => StoryObj) => {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        );
    };
