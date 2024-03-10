import { getQueryParams } from "./addQueryParams";

describe("addQueryParams", function () {
    test("test with 1 param", () => {
        const params = getQueryParams({
            test: "value",
        });
        expect(params).toBe(`?test=value`);
    });
    test("test with multiple params", () => {
        const params = getQueryParams({
            test: "value",
            second: "2",
        });
        expect(params).toBe(`?test=value&second=2`);
    });
    test("test with no params", () => {
        const params = getQueryParams({
            test: "value",
            second: undefined,
        });
        expect(params).toBe(`?test=value`);
    });
});
