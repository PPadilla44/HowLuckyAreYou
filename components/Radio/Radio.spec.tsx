import { render } from "@testing-library/react-native";
import { SettingsProvider } from "../contexts/useSettings";
import Radio from "./Radio";

describe('<Radio />', () => {
    
    it('should render correctly', () => {
        render(
            <SettingsProvider>
                <Radio />
            </SettingsProvider>
        )
    });

});