import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {
    text: "",
};

export const addCommentFormSlice = createSlice({
    name: "addCommentForm",
    initialState,
    reducers: {
        setText: (
            state: AddCommentFormSchema,
            action: PayloadAction<string>,
        ) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state: LoginSchema) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state: LoginSchema) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state: LoginSchema, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
