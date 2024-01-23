import { validateProfileData } from "./validateProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "entities/Profile/model/types/profile";

const data = {
    username: "hansen",
    age: 25,
    country: Country.Spain,
    lastname: "Hansen",
    first: "Caroline",
    city: "Barcelona",
    currency: Currency.EUR,
};

describe("validateProfileData", () => {
    test("success", async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test("without firstname and lastname", async () => {
        const result = validateProfileData({
            ...data,
            first: "",
            lastname: "",
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test("incorrect age", async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test("empty data", async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
});
