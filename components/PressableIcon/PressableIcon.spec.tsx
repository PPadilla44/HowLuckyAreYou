import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import PressableIcon from "./PressableIcon";

describe('<PressableIcon', () => {

    afterEach(cleanup);

    let wrapper: RenderAPI;
    let mockFn = jest.fn()
    beforeEach(() => {
        wrapper = render(<PressableIcon name="gear" size={40} type="evilicon" callBack={mockFn} />)
    })

    it("renders correctly", () => {
        wrapper.getByTestId("pressableIconBtn");
        wrapper.getByTestId("pressableIcon");
        wrapper.container.findByProps({name: "gear"});
        wrapper.container.findByProps({ type: "evilicon" })
        wrapper.container.findByProps({ size: 40 })
    });
    
    it("runs call back function on button press", () => {
        const btn = wrapper.getByTestId("pressableIconBtn");
        fireEvent.press(btn);
        wrapper.debug()
        expect(mockFn).toBeCalled();
    });


});