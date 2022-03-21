import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { TouchableOpacity, View } from "../../Themed";
import FractionInput, { Props } from "./FractionInput";

describe('<FractionInput />', () => {
    
    const mockFn = jest.fn();

    const props : Props = {
        denominator: "1",
        numerator: "5",
        handleChanges: mockFn,
        multiplier: "1"
    }

    let wrapper: RenderAPI;

    afterEach(cleanup)

    beforeEach(() => {
        wrapper = render(<FractionInput {...props} /> )
    });

    it('should render correctly', () => {
        expect(wrapper.container.children).toHaveLength(5);
        expect(wrapper.container.findAllByType(View)).toHaveLength(7);
        expect(wrapper.container.findAllByType(TouchableOpacity)).toHaveLength(1);
    });

    it('should render correct placeholder and values', () => {
        wrapper.getByPlaceholderText("1");
        wrapper.getByPlaceholderText("10");
        wrapper.getByDisplayValue("5");
        wrapper.getByDisplayValue("1");
    });

    it('should call handleChanges on textChange', () => {
        const numInput = wrapper.getByPlaceholderText("1");
        const denInput = wrapper.getByPlaceholderText("10");
        fireEvent.changeText(numInput, "testing1");
        fireEvent.changeText(denInput, "testing2");
        expect(mockFn).toBeCalledTimes(2)
    });

})