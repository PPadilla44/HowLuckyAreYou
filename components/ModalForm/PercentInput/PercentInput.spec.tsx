import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { TouchableOpacity, View } from "../../Themed";
import { TextAsIcon } from "../../UI";
import PercentInput, { Props } from "./PercentInput";

describe('<PercentInput />', () => {
    
    const mockFn = jest.fn();

    const props : Props = {
        oddsString: "25",
        changeText: mockFn
    }

    let wrapper: RenderAPI;

    afterEach(cleanup)

    beforeEach(() => {
        wrapper = render(<PercentInput {...props} /> )
    });

    it('should render correctly', () => {
        expect(wrapper.container.children).toHaveLength(2);
        expect(wrapper.container.findAllByType(View)).toHaveLength(3);
        expect(wrapper.container.findAllByType(TextAsIcon)).toHaveLength(1);
    });

    it('should render correct placeholder and values', () => {
        wrapper.getByPlaceholderText("1.0");
        wrapper.getByDisplayValue("25");
        wrapper.getByText("%");
    });

    it('should call handleChanges on textChange', () => {
        const input = wrapper.getByPlaceholderText("1.0");
        fireEvent.changeText(input, "testing1");
        expect(mockFn).toBeCalledTimes(1);
    });

    it('should match snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

})