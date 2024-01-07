import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", function () {
    test("render button", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
});
