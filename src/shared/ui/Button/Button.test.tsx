import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("Button", function () {
    test("render button", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("render button with theme clear", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});
