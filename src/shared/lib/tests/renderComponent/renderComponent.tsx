import { ReactNode, Suspense } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import i18nForTests, {
    initI18nForTests,
} from "../../../config/i18n/i18nForTests";

export interface renderComponentOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function renderComponent(
    component: ReactNode,
    options: renderComponentOptions = {},
) {
    const { route = "/", initialState } = options;

    initI18nForTests();

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    <Suspense fallback="">{component}</Suspense>
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
