import { StoryObj } from "@storybook/react";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";

export const ThemeDecorator =
    (theme: Theme) => (StoryComponent: () => StoryObj) => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
