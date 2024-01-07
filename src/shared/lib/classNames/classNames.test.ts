import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", function () {
    test("with only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("with additional class param", () => {
        const expectedClassName = "someClass class1 class2";
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
            expectedClassName,
        );
    });

    test("with all params", () => {
        const expectedClassName = "someClass class1 class2 hovered scrollable";
        expect(
            classNames("someClass", { hovered: true, scrollable: true }, [
                "class1",
                "class2",
            ]),
        ).toBe(expectedClassName);
    });

    test("with all params and one mode false", () => {
        const expectedClassName = "someClass class1 class2 hovered";
        expect(
            classNames("someClass", { hovered: true, scrollable: false }, [
                "class1",
                "class2",
            ]),
        ).toBe(expectedClassName);
    });

    test("with all params and one mode undefined", () => {
        const expectedClassName = "someClass class1 class2 hovered";
        expect(
            classNames("someClass", { hovered: true, scrollable: undefined }, [
                "class1",
                "class2",
            ]),
        ).toBe(expectedClassName);
    });
});
