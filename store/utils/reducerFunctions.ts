import { ClickerState } from "../clicker"

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
            tempResults = { BtnColor: "green", text: "YOU ARE REALLY LUCKY" };
        } else if (userOdds > 1) {
            tempResults = { BtnColor: "red", text: "YOU ARE NOT LUCKY" };
        } else {
            tempResults = { BtnColor: "blue", text: "YOU ARE normal" };
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