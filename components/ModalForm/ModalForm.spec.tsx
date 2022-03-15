import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { ClickerState } from "../../store/clicker";
import { ClickerProvider, useClicker } from "../contexts/useClicker";
import FractionInput from "./FractionInput";
import ModalForm from "./ModalForm";
import PercentInput from "./PercentInput";


describe('<ModalForm />', () => {
    
    const goBack = jest.fn();
    let wrapper: RenderAPI;
    let props: any;

    afterEach(cleanup)

    beforeEach(() => {
        props = {
            navigation: {
                goBack
            }
        }
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


    it('should handle correct typing and values in FractionInput', () => {
        const [button1, button2] = wrapper.getAllByTestId("buttonGroupItem");
        fireEvent.press(button2);
        const fractionComponent = wrapper.container.findByType(FractionInput);
        expect(fractionComponent).toHaveProp("denominator");
        expect(fractionComponent).toHaveProp("numerator");
        const denominator = fractionComponent.props.denominator;
        const numerator = fractionComponent.props.numerator;
        expect(denominator).toBeTruthy();
        expect(numerator).toBeTruthy();
        const nInput = wrapper.getByDisplayValue(numerator);
        const dInput = wrapper.getByDisplayValue(denominator);
        fireEvent.changeText(nInput, "5");
        wrapper.getByDisplayValue("5");
        fireEvent.changeText(dInput, "10");
        wrapper.getByDisplayValue("10");
    });

    it('should handle incorrect values in FractionInput', () => {
        const [button1, button2] = wrapper.getAllByTestId("buttonGroupItem");
        fireEvent.press(button2);
        const fractionComponent = wrapper.container.findByType(FractionInput);
        const denominator = fractionComponent.props.denominator;
        const numerator = fractionComponent.props.numerator;
        const nInput = wrapper.getByDisplayValue(numerator);
        const dInput = wrapper.getByDisplayValue(denominator);
        fireEvent.changeText(nInput, "this shouldnt work");
        wrapper.getByDisplayValue(numerator);
        fireEvent.changeText(dInput, "this shouldnt work");
        wrapper.getByDisplayValue(denominator);
        fireEvent.changeText(nInput, "100");
        fireEvent.changeText(dInput, "10000");
        wrapper.getByDisplayValue(numerator);
        wrapper.getByDisplayValue(denominator);
    });

    it('should handle submission as pecent with try button', () => {
        const tryBtn = wrapper.getByTestId("tryBtn");
        expect(tryBtn).toBeDisabled();
        const tInput = wrapper.getByPlaceholderText("Title");
        fireEvent.changeText(tInput, "Changed");
        const pInput = wrapper.getByTestId("percentInput");
        fireEvent.changeText(pInput, "50.00");
        expect(tryBtn).toBeEnabled();
        fireEvent.press(tryBtn);
        expect(goBack).toBeCalled();
        expect(tryBtn).toBeDisabled();
    });

    it('should handle submission as fraction with try button', () => {
        const [button1, button2] = wrapper.getAllByTestId("buttonGroupItem");
        fireEvent.press(button2);
        const tryBtn = wrapper.getByTestId("tryBtn");
        expect(tryBtn).toBeDisabled();
        const tInput = wrapper.getByPlaceholderText("Title");
        fireEvent.changeText(tInput, "Changed");
        const nInput = wrapper.getByTestId("numeratorInput");
        const dInput = wrapper.getByTestId("denominatorInput");
        fireEvent.changeText(nInput, "5");
        fireEvent.changeText(dInput, "10");
        expect(tryBtn).toBeEnabled();
        fireEvent.press(tryBtn);
        expect(goBack).toBeCalled();
        expect(tryBtn).toBeDisabled();
    });

    it.todo('should handle pressing save button');

})