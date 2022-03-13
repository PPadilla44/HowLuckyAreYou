import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import LeftSwipe from "./LeftSwipe";

describe('<LeftSwipe />', () => {
    

    const mockFn = jest.fn();
    let wrapper: RenderAPI;

    afterEach(cleanup)

    beforeEach(() => {
        wrapper = render(<LeftSwipe callback={mockFn} /> )
    });

    it('should render correctly', () => {
        wrapper.getByTestId("leftSwipeBtn");
        wrapper.getByText("Share");
    });

    it('should run callback on press', () => {
        fireEvent.press(wrapper.getByTestId("leftSwipeBtn"));
        expect(mockFn).toBeCalled()
    });
    
    it('should render correct styling', () => {
        
        expect(wrapper.getByTestId("leftSwipeBtn")).toHaveStyle({
            backgroundColor: "#325C99",
            justifyContent: 'center',
            alignItems: "flex-start"
        });
        expect(wrapper.getByText("Share")).toHaveStyle({
            color: "white",
        })
    });

    it('should match snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});