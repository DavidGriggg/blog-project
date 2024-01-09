import { screen } from "@testing-library/react";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { Counter } from "./Counter";
import { userEvent } from "@storybook/test";

describe("Counter", function () {
    test("check value", () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });
    test("increment", async () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId("increment-btn"));

        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
    test("decrement", async () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId("decrement-btn"));

        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
});
