import { StoryObj } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { profileReducer } from "@/features/editableProfileCard/testing";
import { articleDetailsReducer } from "@/entities/Article/testing";
import { addCommentFormReducer } from "@/features/addCommentForm/testing";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: () => StoryObj) => {
        return (
            <StoreProvider
                initialState={initialState}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
    };
