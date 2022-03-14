import { cleanup, fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { TextAsIcon, SettingsIcon } from "./index"

describe("<TextAsIcon />", () => {

    afterEach(cleanup);

    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<TextAsIcon style={{fontSize: 48, fontWeight: "bold"}} text={"$"} />)
    })

    it("renders correctly", () => {
        const text = wrapper.getByText("$");
        expect(text).toHaveStyle({ fontSize: 48, fontWeight: "bold"});
    });

})

describe("<SettingsIcon />", () => {

    afterEach(cleanup);

    let wrapper: RenderAPI;
    let mockFn = jest.fn()
    beforeEach(() => {
        wrapper = render(<SettingsIcon callBack={mockFn} />)
    })

    it("renders correctly", () => {
        wrapper.getByTestId("settingsBtn");
        let icon = wrapper.getByTestId("settingsIcon");
        icon.findByProps({name: "tune"});
    });
    
    it("runs call back function on button press", () => {
        let btn = wrapper.getByTestId("settingsBtn");
        fireEvent.press(btn);
        expect(mockFn.mock.calls.length).toBe(1);
    });


})