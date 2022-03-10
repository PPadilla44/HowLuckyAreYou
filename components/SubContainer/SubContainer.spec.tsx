import React from "react";
import { cleanup, render, RenderAPI } from "@testing-library/react-native"
import "@testing-library/jest-native";
import SubContainer, { Props } from "./SubContainer";
import { Text } from "../Themed";

describe('<SubContainer/>', () => {

    const props: Props = {
        text: "TEST TEXT",
        textStyle: {
            fontWeight: "bold",
            fontSize: 64,
            fontFamily: "Futura"
        },
        title: "TEST TITLE"
    }

    afterEach(cleanup)

    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<SubContainer {...props} />);
    })

    it("renders correctly", () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    
    it("renders props", () => {
        expect(wrapper.container.props).toEqual(props);
    });

    it("renders texts", () => {
        const title = wrapper.getByTestId("title");
        expect(title.props.children).toBe("TEST TITLE");

        const text = wrapper.getByTestId("text")
        expect(text.props.children).toBe("TEST TEXT");
    });

    it("render style from text style props", () => {
        const text = wrapper.getByTestId("text");
        expect(text).toHaveStyle({
            fontWeight: "bold",
            fontSize: 64,
            fontFamily: "Futura"
        });

    });

    it("updates correctly", () => {
        const newComponent = (
            <SubContainer 
            text="new text"
            title="new title"
            textStyle={{
                backgroundColor: "red",
            }} 
            />
        )
        wrapper.update(newComponent)
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
    
})