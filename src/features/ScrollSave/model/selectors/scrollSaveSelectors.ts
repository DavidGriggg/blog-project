import { StateSchema } from "@/app/providers/StoreProvider";

export const getScroll = (state: StateSchema) => state.scrollSave.scroll;
export const getScrollByPath = (state: StateSchema, path: string) =>
    state.scrollSave.scroll[path] || 0;
