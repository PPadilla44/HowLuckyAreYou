import { cleanup, render, RenderAPI } from "@testing-library/react-native";
import { OddsItemInterface } from "../../types";
import OddsList from "./OddsList";
import OddsItem from "../OddsItem";
import { Text } from "../Themed";

describe('<OddsList />', () => {

    const data: OddsItemInterface[] = [
        { id: "1", title: "Lottery", fraction: { numerator: "1", denominator: "42" }, fractionPref: "1", multiplier: "B" },
        { id: "2", title: "Hair Loss", fraction: { numerator: "3", denominator: "22" }, fractionPref: "1", multiplier: "M" },
        { id: "3", title: "Random", oddsString: "1.02", multiplier: "1", fractionPref: "0" },
    ]

    afterEach(cleanup)

    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<OddsList data={{ fetching: false, data }} />)
    });

    it('should render correctly', () => {
        expect(wrapper.container.children).toHaveLength(4);
        expect(wrapper.container.findAllByType(OddsItem)).toHaveLength(4);
    });

    it('should render OddsItems correctly', () => {
        const [one, two, three, four] = wrapper.container.findAllByType(OddsItem);

        const [ oneF, oneS ] = one.findAllByType(Text);
        expect(oneF).toHaveTextContent("Lottery");
        expect(oneS).toHaveTextContent("1/42");
        
        const [ twoF, twoS ] = two.findAllByType(Text);
        expect(twoF).toHaveTextContent("Hair Loss");
        expect(twoS).toHaveTextContent("2/3");
        
        const [ threeF, threeS ] = three.findAllByType(Text);
        expect(threeF).toHaveTextContent("Random");
        expect(threeS).toHaveTextContent("1.02");
        
        const [ fourF, fourS ] = four.findAllByType(Text);
        expect(fourF).toHaveTextContent("");
        expect(fourS).toHaveTextContent("");
    });

});