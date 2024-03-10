import { UserSchema } from "@/entities/User";
import { ProfileSchema } from "@/features/editableProfileCard";
import { ArticleDetailsSchema } from "@/entities/Article";
import { LoginSchema } from "@/features/AuthByUsername";
import { AddCommentFormSchema } from "@/features/addCommentForm";
import { ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";
import { ArticlesPageSchema } from "@/pages/ArticlesPage";
import { ScrollSaveSchema } from "@/features/ScrollSave";

import {
    AnyAction,
    EmptyObject,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
    user: UserSchema;
    scrollSave: ScrollSaveSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => EmptyObject;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface StoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
