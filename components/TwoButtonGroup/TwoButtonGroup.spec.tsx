import { cleanup, fireEvent, RenderAPI, render } from "@testing-library/react-native";
import React from "react";
import { ClickerProvider } from "../contexts/useClicker";
import TwoButtonGroup from "./TwoButtonGroup";

describe('<TwoButtonGroup />', () => {
    const setStateMock = jest.fn();

    const props = {
        buttons: ["First", "Second"],
    }

    afterEach(cleanup)

    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(
            <ClickerProvider>
                <TwoButtonGroup
                    {...props}
                />
            </ClickerProvider>
        )
    });

    it("should render correctly", () => {
        wrapper.getByText("First");
        wrapper.getByText("Second");
        const buttons = wrapper.getAllByTestId("buttonGroupItem");
        expect(buttons).toHaveLength(2);
        expect(buttons[0].children[0]).toHaveStyle({
            opacity: 1
        })
        expect(buttons[1].children[0]).toHaveStyle({
            opacity: .5
        })
        expect(buttons[0]).toHaveTextContent("First")
        expect(buttons[1]).toHaveTextContent("Second")
    });

    it('should be able to switch between buttons', () => {
        const [button1, button2] = wrapper.getAllByTestId("buttonGroupItem");
        fireEvent.press(button2);
        fireEvent.press(button1);
    });


})