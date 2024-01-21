import { StoreProvider } from "app/providers/StoreProvider/ui/StoreProvider";
import {
    createReduxStore,
    AppDispatch,
} from "app/providers/StoreProvider/config/store";
import type {
    StateSchema,
    StoreWithManager,
    ThunkConfig,
} from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    ThunkConfig,
    AppDispatch,
    StateSchema,
    StoreWithManager,
};
