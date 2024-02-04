import { StoryObj } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
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
