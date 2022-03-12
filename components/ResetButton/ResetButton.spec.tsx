import { render, RenderAPI, fireEvent, act, cleanup } from "@testing-library/react-native";
import React from "react";
import { Alert } from "react-native";
import { ClickerProvider } from "../contexts/useClicker";
import ResetButton from "./ResetButton";

describe('<ResetButton />', () => {

    let wrapper: RenderAPI;

    beforeEach(() => {
        wrapper = render(
            <ClickerProvider>
                <ResetButton />
            </ClickerProvider>
        );
    });

    afterEach(cleanup)


    it('should render correctly', () => {
        wrapper.getByText("Reset");
        expect(wrapper.container.children).toHaveLength(1);
    });

    it('should render didHit FALSE state styles correctly', () => {
        expect(wrapper.getByTestId("resetWrapper")).toHaveStyle({ opacity: 0.5 });
        expect(wrapper.getByText("Reset")).toHaveStyle({ color: "gray" });
    });

    it('should show alert correctly on press', () => {
        const alert = jest.spyOn(Alert, "alert");
        fireEvent.press(wrapper.getByTestId("resetBtn"));
        expect(alert).toHaveBeenCalled();
        expect(alert.mock.calls[0]).toHaveLength(3)
        alert.mockClear()
    });


    it('should call and reset color when confirm reset it pressed', () => {
        const alert = jest.spyOn(Alert, "alert");
        fireEvent.press(wrapper.getByTestId("resetBtn"));

        act(() => {
            alert?.mock?.calls?.[0]?.[2]?.[1].onPress!();
        });
        expect(wrapper.getByTestId("resetWrapper")).toHaveStyle({ opacity: 0.5 });
        expect(wrapper.getByText("Reset")).toHaveStyle({ color: "gray" });
        alert.mockClear()
    });

    it("canceles alert when reset button is pressed and canceled", () => {
        const alert = jest.spyOn(Alert, "alert");
        const logging = jest.spyOn(console, "log")
        const resetBtn = wrapper.getByTestId("resetBtn");

        fireEvent.press(resetBtn);
        expect(alert).toHaveBeenCalled();

        act(() => {
            alert?.mock?.calls?.[0]?.[2]?.[0].onPress!();
        });
        expect(logging).toBeCalled()

    });

    it('should match snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });


});