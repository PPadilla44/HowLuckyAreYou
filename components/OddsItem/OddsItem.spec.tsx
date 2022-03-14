import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import React from "react";
import { OddsItemInterface } from "../../types";
import { Text } from "../Themed";
import OddsItem from "./OddsItem";

describe('<OddsItem />', () => {
    
    const props : OddsItemInterface = {
        id: "1",
        name: "test1",
        odds: "90%"
    } 

    let wrapper: RenderAPI;

    afterEach(cleanup)

    beforeEach(() => {
        wrapper = render(<OddsItem item={props} /> )
    });

    it('should render correctly', () => {
        wrapper.getByText("test1");
        wrapper.getByText("90%");
        expect(wrapper.container.findAllByType(Text)).toHaveLength(2)
        wrapper.getByTestId("oddsItemBtn");
    });

    it('should render press on item', () => {
        const logSpy = jest.spyOn(console, "log");
        fireEvent.press(wrapper.getByTestId("oddsItemBtn"));
        expect(logSpy).toBeCalled()
    });

    it('should render correct styling', () => {
        expect(wrapper.getByTestId("oddsItemBtn")).toHaveStyle({
            paddingHorizontal: 30,
            paddingVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
        });

        expect(wrapper.container.findAllByType(Text)[0]).toHaveStyle({
            fontSize: 24
        })
        expect(wrapper.container.findAllByType(Text)[1]).toHaveStyle({
            fontSize: 24
        })
    });

    it('should match snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });


});