import { Suspense } from "react";
import { StoryObj } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from "/config/storybook/i18next";
import { initI18nForStorybook } from "../../../../../config/storybook/i18next";
import { Loader } from "@/shared/ui/Loader";

export const I18nDecorator = (StoryComponent: () => StoryObj) => {
    initI18nForStorybook();

    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<Loader />}>
                <StoryComponent />
            </Suspense>
        </I18nextProvider>
    );
};
