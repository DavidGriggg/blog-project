import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "entities/Profile";

const data = {
    username: "hansen",
    age: 25,
    country: Country.Spain,
    lastname: "Hansen",
    first: "Caroline",
    city: "Barcelona",
    currency: Currency.EUR,
};

describe("profileSlice", () => {
    test("test set readOnly", () => {
        const state: DeepPartial<ProfileSchema> = { readOnly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadOnly(true),
            ),
        ).toEqual({ readOnly: true });
    });
    test("test cancel edit", () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: "" },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readOnly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    test("test updateProfile", () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: "" },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: "caroline" }),
            ),
        ).toEqual({
            form: { username: "caroline" },
        });
    });
    test("test update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test("test update profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, "", jest.fn() as any, ""),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readOnly: true,
            form: data,
            data,
        });
    });
});
