import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import RightSwipe from "./RightSwipe";

describe('<RightSwipe />', () => {
    

    const mockFn = jest.fn();
    let wrapper: RenderAPI;

    afterEach(cleanup)

    beforeEach(() => {
        wrapper = render(<RightSwipe callback={mockFn} /> )
    });

    it('should render correctly', () => {
        wrapper.getByTestId("rightSwipeBtn");
        wrapper.getByText("Delete");
    });

    it('should run callback on press', () => {
        fireEvent.press(wrapper.getByTestId("rightSwipeBtn"));
        expect(mockFn).toBeCalled()
    });
    
    it('should render correct styling', () => {
        
        expect(wrapper.getByTestId("rightSwipeBtn")).toHaveStyle({
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'flex-end',
        });
        expect(wrapper.getByText("Delete")).toHaveStyle({
            color: "white",
        })
    });

    it('should match snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});