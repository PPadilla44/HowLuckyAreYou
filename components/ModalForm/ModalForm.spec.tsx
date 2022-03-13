import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { ClickerState } from "../../store/clicker";
import { ClickerProvider, useClicker } from "../contexts/useClicker";
import FractionInput from "./FractionInput";
import ModalForm from "./ModalForm";
import PercentInput from "./PercentInput";

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

describe('<ModalForm />', () => {

    let wrapper: RenderAPI;
    let props: any;
    let state: ClickerState;

    afterEach(cleanup)

    beforeEach(() => {
        props = createTestProps({});
        wrapper = render(
            <ClickerProvider>
                <ModalForm {...props} />
            </ClickerProvider>
        );
    });

    it('should render correctly', () => {
        expect(wrapper.getByTestId("modalForm").children).toHaveLength(4);
        wrapper.getByPlaceholderText("Title");
    });

    it('should render correct input component based on selection', () => {
        wrapper.container.findByType(PercentInput);
        const [button1, button2] = wrapper.getAllByTestId("buttonGroupItem");
        fireEvent.press(button2);
        wrapper.container.findByType(FractionInput);
        fireEvent.press(button1);
        wrapper.container.findByType(PercentInput);
    });

    it('should handle correct typing and values in PercentInput', () => {
        const percentComponent = wrapper.container.findByType(PercentInput);
        expect(percentComponent).toHaveProp("oddsString")
        const oddsString = percentComponent.props.oddsString;
        expect(oddsString).toBeTruthy();
        const pInput = wrapper.getByDisplayValue(oddsString);
        fireEvent.changeText(pInput, "50.00");
        wrapper.getByDisplayValue("50.00");
    });
    
    it('should handle typing and values in Title', () => {
        const tInput = wrapper.getByPlaceholderText("Title");
        fireEvent.changeText(tInput, "Changed");
        wrapper.getByDisplayValue("Changed")
    });

    it('should handle incorrect values in PercentInput', () => {
        const percentComponent = wrapper.container.findByType(PercentInput);
        const oddsString = percentComponent.props.oddsString;
        const pInput = wrapper.getByTestId("percentInput");
        fireEvent.changeText(pInput, "this shouldnt work");
        wrapper.getByDisplayValue(oddsString);
    });
    
    
    it.todo('should handle correct typing and values in FractionInput');
    it.todo('should handle incorrect values in FractionInput')
    it.todo('should handle pressing try button');
    it.todo('should handle pressing save button');

})