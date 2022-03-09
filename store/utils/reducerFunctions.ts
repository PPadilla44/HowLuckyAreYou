import { ClickerResults, ClickerState } from "../clicker";
import Fraction from "fraction.js";

export const increment = (state: ClickerState): ClickerState => {

    const tempCount = state.count + 1;


    const { denominator , numerator } = state.fraction;

    const randomNumFromMax = Math.ceil(Math.random() * denominator);

    if (randomNumFromMax <= numerator) {
        const max =  denominator - numerator;

        let tempResults : ClickerResults;

        if (tempCount < max) {
            tempResults = { BtnColor: "lucky" , text: "YOU ARE REALLY LUCKY" };
        } else if (tempCount > max) {
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
    
    const fractionWhole = new Fraction(oddsString);
    
    const fraction = { denominator: fractionWhole.d, numerator: fractionWhole.n };

    const tempState: ClickerState = {...state, title, fraction, oddsString};

    console.log(tempState);

    return tempState;
}