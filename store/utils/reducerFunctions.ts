import { ClickerResults, ClickerState } from "../clicker";
import Fraction from "fraction.js";

export const increment = (state: ClickerState): ClickerState => {

    const tempCount = state.count + 1;

    const { denominator , numerator } = state.fraction;

    const randomNumFromMax = Math.ceil(Math.random() * denominator);

    if (randomNumFromMax <= numerator) {
        const max =  (denominator - numerator) + 1;

        let tempResults : ClickerResults;

        if (tempCount < max) {
            tempResults = { BtnColor: "lucky" , text: "YOU ARE LUCKY" };
        } else if (tempCount > max) {
            tempResults = { BtnColor: "unlucky", text: "YOU ARE UNLUCKY" };
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

export const updateOddsPercent = (state: ClickerState, {title, oddsString}: {title: string, oddsString: string}): ClickerState => {
    
    const oddsNum = parseFloat(oddsString) / 100;
    
    const fractionWhole = new Fraction(oddsNum);

    const fraction = { denominator: fractionWhole.d, numerator: fractionWhole.n };

    const tempState: ClickerState = {...state, title, fraction, oddsString};
    const newState: ClickerState = reset(tempState);

    return newState;
}

export const updateOddsFraction = (state: ClickerState, { title, numerator, denominator }: {title: string,numerator: number, denominator: number }): ClickerState => {
    const decimalNum = numerator / denominator;
    const oddsString = `${decimalNum * 100}`.substring(0, 10);
    const fraction = { numerator, denominator };
    const tempState: ClickerState = { ...state, title, fraction, oddsString  };
    const newState: ClickerState = reset(tempState);
    return newState;
}

export const reset = (state: ClickerState): ClickerState => {
    return { ...state, count:0 , didHit: false, results: { BtnColor: "default", text: "" } }
}