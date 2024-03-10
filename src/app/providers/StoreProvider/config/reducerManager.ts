import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import {
    MountedReducers,
    ReducerManager,
    StateSchema,
    StateSchemaKey,
} from "../config/StateSchema";

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers as any);

    let keysToRemove: Array<StateSchemaKey> = [];
    const mounterReducers: MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mounterReducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state as any, action as never);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mounterReducers[key] = true;

            combinedReducer = combineReducers(reducers as any);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            mounterReducers[key] = false;

            combinedReducer = combineReducers(reducers as any);
        },
    };
}
