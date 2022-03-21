import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import React from "react";
import { OddsItemInterface } from "../../types";
import { ClickerProvider } from "../contexts/useClicker";
import { Text } from "../Themed";
import OddsItem from "./OddsItem";

describe('<OddsItem />', () => {

    const props: OddsItemInterface = {
        id: "1",
        title: "test1",
        fractionPref: "0",
        multiplier: "1",
        oddsString: "90"
    }

    let wrapper: RenderAPI;

    afterEach(cleanup)

    beforeEach(() => {
        wrapper = render(
            <ClickerProvider>
                <OddsItem item={props} />
            </ClickerProvider>
        )
    });

    it('should render correctly', () => {
        wrapper.getByText("test1");
        wrapper.getByText("90%");
        expect(wrapper.container.findAllByType(Text)).toHaveLength(2)
        wrapper.getByTestId("oddsItemBtn");
    });

    it('should render press on item', () => {
        fireEvent.press(wrapper.getByTestId("oddsItemBtn"));
    });

    it('should render correct styling', () => {
        expect(wrapper.getByTestId("oddsItemBtn")).toHaveStyle({
            paddingHorizontal: 30,
            paddingVertical: 20,
        });

        expect(wrapper.container.findAllByType(Text)[0]).toHaveStyle({
            fontSize: 24
        })
        expect(wrapper.container.findAllByType(Text)[1]).toHaveStyle({
            fontSize: 24
        })
    });


});