import { ClickerResults, ClickerState } from "../clicker";

export const increment = (state: ClickerState): ClickerState => {

    const tempCount = state.count + 1;

    const max = 1 / (state.oddsNum);

    const randomNumFromMax = Math.ceil(Math.random() * max);


    if (randomNumFromMax === max) {
        const userOdds = tempCount / max;
        let tempResults : ClickerResults;

        if (userOdds < 1) {
            tempResults = { BtnColor: "lucky" , text: "YOU ARE REALLY LUCKY" };
        } else if (userOdds > 1) {
            tempResults = { BtnColor: "unlucky", text: "YOU ARE NOT LUCKY" };
        } else {
            tempResults = { BtnColor: "normal", text: "YOU ARE normal" };
        }
        const newState = {
            ...state,
            count: tempCount,
            results: tempResults,
            didHit: true
        }

        return newState
    }

    return {
        ...state,
        count: tempCount
    }
}

export const updateOdds = (state: ClickerState, {title, oddsString}: {title: string, oddsString: string}): ClickerState => {
    
    const oddsNum = parseFloat(oddsString) / 100;
    
    const tempState: ClickerState = {...state, title, oddsNum, oddsString};

    console.log(tempState);

    return tempState;
}