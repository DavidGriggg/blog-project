import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
    // Without reusable decision

    // let dispatch: jest.MockedFn<any>;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test("fulfilled", async () => {
    //     const userValue = { username: "admin", id: "1" };
    //     mockedAxios.post.mockResolvedValue({
    //         data: userValue,
    //     });
    //     const action = loginByUsername({ username: "admin", password: "123" });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledWith(
    //         userActions.setAuthData(userValue),
    //     );
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result["meta"].requestStatus).toBe("fulfilled");
    //     expect(result["payload"]).toEqual(userValue);
    // });
    // test("rejected", async () => {
    //     const userValue = { username: "admin", id: "1" };
    //     mockedAxios.post.mockResolvedValue({
    //         status: 403,
    //     });
    //     const action = loginByUsername({ username: "admin", password: "123" });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(result["meta"].requestStatus).toBe("rejected");
    //     expect(result["payload"]).toEqual(i18n.t("authIncorrect"));
    // });

    // With reusable class

    test("fulfilled", async () => {
        const userValue = { username: "admin", id: "1" };
        mockedAxios.post.mockResolvedValue({
            data: userValue,
        });

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "admin",
            password: "123",
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue),
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result["meta"].requestStatus).toBe("fulfilled");
        expect(result["payload"]).toEqual(userValue);
    });
    test("rejected", async () => {
        mockedAxios.post.mockResolvedValue({
            status: 403,
        });

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "admin",
            password: "123",
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result["meta"].requestStatus).toBe("rejected");
        expect(result["payload"]).toEqual(i18n.t("authIncorrect"));
    });
});
