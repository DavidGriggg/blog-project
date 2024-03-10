import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema } from "@/features/editableProfileCard";
import { Profile } from "@/entities/Profile";

const initialState: ProfileSchema = {
    readOnly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadOnly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
            state.readOnly = action.payload;
        },
        cancelEdit: (state: ProfileSchema) => {
            state.readOnly = true;
            state.validateErrors = undefined;
            state.form = state.data;
        },
        updateProfile: (
            state: ProfileSchema,
            action: PayloadAction<Profile>,
        ) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state: ProfileSchema) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state: ProfileSchema, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                },
            )
            .addCase(
                fetchProfileData.rejected,
                (state: ProfileSchema, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            )
            .addCase(updateProfileData.pending, (state: ProfileSchema) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state: ProfileSchema, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                    state.readOnly = true;
                    state.validateErrors = undefined;
                },
            )
            .addCase(
                updateProfileData.rejected,
                (state: ProfileSchema, action) => {
                    state.isLoading = false;
                    state.validateErrors = action.payload;
                },
            );
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
