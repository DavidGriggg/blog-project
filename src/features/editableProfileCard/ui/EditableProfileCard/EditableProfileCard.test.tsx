import { screen } from "@testing-library/react";
import { EditableProfileCard } from "./EditableProfileCard";
import { renderComponent } from "@/shared/lib/tests/renderComponent/renderComponent";
import { Profile } from "@/entities/Profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import { userEvent } from "@testing-library/user-event/setup/index";
import { $api } from "@/shared/api/api";

const profile: Profile = {
    id: "1",
    first: "admin",
    lastname: "admin",
    age: 465,
    currency: Currency.RUB,
    country: Country.Spain,
    city: "Madrid",
    username: "admin213",
};

const options = {
    initialState: {
        profile: {
            readOnly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: "1", username: "admin213" },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe("features/EditableProfileCard", function () {
    test("should toggle to edit mode", async () => {
        renderComponent(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );
        expect(screen.getByTestId("EditableProfileCardHeader.CancelButton"));
    });
    test("should reset data after cancel editing", async () => {
        renderComponent(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );

        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

        await userEvent.type(
            screen.getByTestId("ProfileCard.firstname"),
            "user",
        );
        await userEvent.type(
            screen.getByTestId("ProfileCard.lastname"),
            "user",
        );

        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user");

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.CancelButton"),
        );

        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue(
            "admin",
        );
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
    });
    test("should throw error", async () => {
        renderComponent(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );

        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton"),
        );

        expect(
            screen.getByTestId("EditableProfileCard.Error.Paragraph"),
        ).toBeInTheDocument();
    });
    test("no errors => put request", async () => {
        const mockPutReq = jest.spyOn($api, "put");
        renderComponent(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );

        await userEvent.type(
            screen.getByTestId("ProfileCard.firstname"),
            "user",
        );

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton"),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
