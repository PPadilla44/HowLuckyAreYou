import { cleanup, fireEvent, RenderAPI, render } from "@testing-library/react-native";
import React from "react";
import TwoButtonGroup from "./TwoButtonGroup";

describe('<TwoButtonGroup />', () => {
    const setStateMock = jest.fn();

    const props = {
        buttons: ["First", "Second"],
        selectedIndex: 0,
        setSelectedIndex: setStateMock
    }

    afterEach(cleanup)

    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(
            <TwoButtonGroup
                {...props}
            />
        )
    });

    it("should render correctly", () => {
        wrapper.container.findByProps({ selectedIndex: 0 })
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
        expect(setStateMock).toHaveBeenCalledWith(1);
        fireEvent.press(button1);
        expect(setStateMock).toHaveBeenCalledWith(0);
    });


})