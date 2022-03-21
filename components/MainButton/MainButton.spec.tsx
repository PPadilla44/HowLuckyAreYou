import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { ClickerProvider } from "../contexts/useClicker";
import { TouchableOpacity } from "../Themed";
import MainButton from "./MainButton";


describe('<MainButton', () => {

    afterEach(cleanup);

    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(
            <ClickerProvider>
                <MainButton />
            </ClickerProvider>
        )
    });

    it('should render correctly', () => {
        wrapper.getByText("What Are The Odds?");
        wrapper.container.findByType(TouchableOpacity)
    });

    it('should should be able to press button until results view mounted', () => {
        const btn = wrapper.getByTestId("mainBtn");
        while(wrapper.container.findAllByType(TouchableOpacity).length > 0) {
            fireEvent.press(btn);
        };
        wrapper.getByTestId("mainBtnResults");
    });

})
