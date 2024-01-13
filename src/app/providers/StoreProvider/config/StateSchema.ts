import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import {
    AnyAction,
    EmptyObject,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";

export interface StateSchema {
    user: UserSchema;

    // Async reducers
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => EmptyObject;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface StoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
