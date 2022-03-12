import { render, RenderAPI, fireEvent } from "@testing-library/react-native";
import SaveTryButtons from "./SaveTryButtons";

describe('<SaveTryButtons />', () => {
    
    const saveMock = jest.fn();
    const tryMock = jest.fn();


    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<SaveTryButtons showTry={false} handleSave={saveMock} handleTry={tryMock}  />)
    });

    it('should render correctly', () => {
        wrapper.getByText("Save");
        wrapper.getByText("Try");
        wrapper.getByTestId("saveBtn")
        wrapper.getByTestId("tryBtn")
    });

    it('should render correct disabled styles', () => {
        const tryBtn = wrapper.getByTestId("tryBtn");
        const tryText = wrapper.getByText("Try");
        wrapper.container.findByProps({ showTry: false });
        wrapper.container.findByProps({ lightColor: "transparent" });
        wrapper.container.findByProps({ darkColor: "transparent" });
        expect(tryBtn).toBeDisabled();
        expect(tryText).toHaveStyle({ opacity: .5 })
    });

    it('should render correct enabled styles', () => {
        wrapper.update(<SaveTryButtons showTry={true} handleSave={saveMock} handleTry={tryMock} />)
        const tryBtn = wrapper.getByTestId("tryBtn");
        const tryText = wrapper.getByText("Try");
        wrapper.container.findByProps({ showTry: true });
        wrapper.container.findByProps({ lightColor: "#E6E6E6" });
        wrapper.container.findByProps({ darkColor: "#808080" });
        expect(tryBtn).toBeEnabled();
        expect(tryText).toHaveStyle({ opacity: 1 })
    });

    it('should handle button presses', () => {
        fireEvent.press(wrapper.getByTestId("saveBtn"));
        expect(saveMock).toHaveBeenCalled()
        fireEvent.press(wrapper.getByTestId("tryBtn"));
        expect(tryMock).toHaveBeenCalled()
    });


    it('should match snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot()
    });

});