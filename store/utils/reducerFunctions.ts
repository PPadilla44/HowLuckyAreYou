import { ClickerState } from "../clicker";
import { BtnColor } from "../clicker";

export const increment = (state: ClickerState) => {
    console.log("****************");

    const tempCount = state.count + 1;

    const max = 1 / (state.odds);

    const randomNumFromMax = Math.ceil(Math.random() * max);

    console.log(randomNumFromMax, max);

    if (randomNumFromMax === max) {
        console.log("GOT IT");
        const userOdds = tempCount / max;
        let tempResults
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
        console.log(newState);

        return newState
    }

    return {
        ...state,
        count: tempCount
    }
}