import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const data = {
    username: "hansen",
    age: 25,
    country: Country.Spain,
    lastname: "Hansen",
    first: "Caroline",
    city: "Barcelona",
    currency: Currency.EUR,
};

describe("fetchProfileData", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockResolvedValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });
    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
    });
});
