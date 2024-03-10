import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "@/features/ScrollSave";

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setScrollPosition: (
            state: ScrollSaveSchema,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
