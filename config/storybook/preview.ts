import type { Preview } from "@storybook/react";
import { RouteDecorator } from "@/shared/config/storybook/RouteDecorator/RouteDecorator";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { I18nDecorator } from "@/shared/config/storybook/I18nDecorator/I18nDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { SuspenseDecorator } from "@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import { Theme } from "../../src";

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default {
    decorators: [
        RouteDecorator,
        StyleDecorator,
        I18nDecorator,
        ThemeDecorator(Theme.LIGHT),
        SuspenseDecorator,
    ],
};
