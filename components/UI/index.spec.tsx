import { cleanup, render, RenderAPI } from "@testing-library/react-native";
import { TextAsIcon } from "./index"

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
