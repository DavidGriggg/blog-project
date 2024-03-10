import { ReactNode, Suspense } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import i18nForTests, {
    initI18nForTests,
} from "@/shared/config/i18n/i18nForTests";
import { Loader } from "@/shared/ui/Loader";

export interface renderComponentOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function renderComponent(
    component: ReactNode,
    options: renderComponentOptions = {},
) {
    const { route = "/", initialState, asyncReducers } = options;

    initI18nForTests();

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState}
                asyncReducers={asyncReducers}
            >
                <I18nextProvider i18n={i18nForTests}>
                    <Suspense fallback={<Loader />}>{component}</Suspense>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
