import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { updateProfileData } from "./updateProfileData";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateProfileError } from "../../consts/consts";

const data = {
    id: "1",
    username: "hansen",
    age: 25,
    country: Country.Spain,
    lastname: "Hansen",
    first: "Caroline",
    city: "Barcelona",
    currency: Currency.EUR,
};

describe("updateProfileData", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockResolvedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });
    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockResolvedValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test("validation error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: "" },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
