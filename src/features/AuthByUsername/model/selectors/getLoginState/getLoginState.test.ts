import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("getLoginState", () => {
    test("should return loginState", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "admin",
                password: "123",
                isLoading: false,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: "admin",
            password: "123",
            isLoading: false,
            error: undefined,
        });
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
