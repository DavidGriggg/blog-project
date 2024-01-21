import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "shared/config/i18n/i18n";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>("profile/updateProfileData", async (_, thunkApi) => {
    const formData = getProfileForm(thunkApi.getState());

    try {
        const response = await thunkApi.extra.api.put<Profile>(
            "/profile",
            formData,
        );
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue(i18n.t("authIncorrect"));
    }
});
