import {
    CombinedState,
    configureStore,
    ReducersMapObject,
    Reducer,
} from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "@/entities/User";
import { scrollSaveReducer } from "@/features/ScrollSave";
import { createReducerManager } from "@/app/providers/StoreProvider/config/reducerManager";
import { $api } from "@/shared/api/api";
import { rtkApi } from "@/shared/api/rtkApi";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    // @ts-ignore
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    // @ts-ignore
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // @ts-ignore
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
