import { StoreProvider } from "app/providers/StoreProvider/ui/StoreProvider";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import type { StateSchema, StoreWithManager } from "./config/StateSchema";

export { StoreProvider, createReduxStore, StateSchema, StoreWithManager };
