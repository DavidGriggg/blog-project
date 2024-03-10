import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

describe("getProfileForm", () => {
    test("should return profile form data", () => {
        const data = {
            username: "hansen",
            age: 25,
            country: Country.Spain,
            lastname: "Hansen",
            first: "Caroline",
            city: "Barcelona",
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
