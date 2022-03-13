import { cleanup, render, RenderAPI, fireEvent, act } from "@testing-library/react-native";
import { Alert } from "react-native";
import { ClickerProvider } from "../components/contexts/useClicker";
import Main from "./Main";

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

describe('<Main />', () => {

    let wrapper: RenderAPI;
    let props: any;

    afterEach(cleanup);

    beforeEach(() => {
        props = createTestProps({});

        const component = (
            <ClickerProvider>
                <Main {...props} />
            </ClickerProvider>
        )

        wrapper = render(component)
    });

    it("renders initial components correctly", () => {
        wrapper.getByText("Times Clicked");
        wrapper.getByText("0");
        wrapper.getByText("Test Your Luck");
        wrapper.getByText("What Are The Odds?");
        wrapper.getByText("25%");
    });

    it("increases count when main button is pressed", () => {
        const count = wrapper.getByText("0");
        const mainBtn = wrapper.getByTestId("mainBtn");
        fireEvent.press(mainBtn);
        expect(count.props.children).toBe(`1`);
    });


    it("resets count when reset button is pressed", () => {
        const alert = jest.spyOn(Alert, "alert");
        const count = wrapper.getByText("0");
        const mainBtn = wrapper.getByTestId("mainBtn");
        const resetBtn = wrapper.getByTestId("resetBtn");

        fireEvent.press(mainBtn);
        expect(count.props.children).toBe(`1`);

        fireEvent.press(resetBtn);
        expect(alert).toHaveBeenCalled()

        act(() => {
            alert?.mock?.calls?.[0]?.[2]?.[1].onPress!();
        });
        expect(count.props.children).toBe(`0`);
    });

    it("canceles alert when reset button is pressed and canceled", () => {
        const alert = jest.spyOn(Alert, "alert");
        const count = wrapper.getByText("0");
        const mainBtn = wrapper.getByTestId("mainBtn");
        const resetBtn = wrapper.getByTestId("resetBtn");

        fireEvent.press(mainBtn);
        expect(count.props.children).toBe(`1`);

        fireEvent.press(resetBtn);
        expect(alert).toHaveBeenCalled();

        act(() => {
            alert?.mock?.calls?.[0]?.[2]?.[0].onPress!();
        });
        expect(count.props.children).toBe(`1`);
    });

})