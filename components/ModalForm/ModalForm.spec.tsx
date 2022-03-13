import { cleanup, render, RenderAPI } from "@testing-library/react-native";
import { ClickerProvider } from "../contexts/useClicker";
import ModalForm from "./ModalForm";

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

describe('<ModalForm />', () => {

    let wrapper: RenderAPI;
    let props: any;

    afterEach(cleanup)

    beforeEach(() => {
        props = createTestProps({});
        wrapper = render(
            <ClickerProvider>
                <ModalForm {...props} />
            </ClickerProvider>
        )
    });

    it('should render correctly', () => {

    });

})