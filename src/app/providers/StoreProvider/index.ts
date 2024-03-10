import { StoreProvider } from "@/app/providers/StoreProvider/ui/StoreProvider";
import {
    createReduxStore,
    AppDispatch,
} from "@/app/providers/StoreProvider/config/store";
import type {
    StateSchema,
    StoreWithManager,
    ThunkConfig,
    StateSchemaKey,
} from "./config/StateSchema";

export { StoreProvider, createReduxStore };

export type {
    StateSchema,
    StoreWithManager,
    ThunkConfig,
    AppDispatch,
    StateSchemaKey,
};
