import { ClickerState } from "../clicker";
import { increment, reset, updateOddsFraction, updateOddsPercent } from "./reducerFunctions";
import { initialClickerState } from "../clicker"

describe('increment()', () => {

    it('should run without hit', () => {
        const state: ClickerState = {
            ...initialClickerState,
            fraction: {
                numerator: 1,
                denominator: 100
            }
        }
        
        expect(increment(state)).toEqual({
            ...state,
            count: 1
        });
    });

    it("should run and hit normal", () => {
        const state: ClickerState = {
            ...initialClickerState,
            fraction: {
                numerator: 1,
                denominator: 1
            }
        }
        expect(increment(state)).toEqual({
            ...state,
            count: 1,
            didHit: true,
            results: { BtnColor: "normal", text: "YOU ARE normal" }
        })
    });

    it("should run and hit luck", () => {
        const state: ClickerState = {
            ...initialClickerState,
            fraction: {
                numerator: 1,
                denominator: 1
            },
            count: -10,
        }
        expect(increment(state)).toEqual({
            ...state,
            didHit: true,
            results: { BtnColor: "lucky" , text: "YOU ARE LUCKY" },
            count: -9
        })
    });

    it("should run and hit unlucky", () => {
        const state: ClickerState = {
            ...initialClickerState,
            fraction: {
                numerator: 1,
                denominator: 1
            },
            count: 10,
        }
        expect(increment(state)).toEqual({
            ...state,
            didHit: true,
            results: { BtnColor: "unlucky", text: "YOU ARE UNLUCKY" },
            count: 11
        })
    });
});

describe('reset()', () => {
    const state: ClickerState = {
        ...initialClickerState,
        count: 10,
        didHit: true,
        results: { BtnColor: "lucky", text: "YOU ARE LUCKY" }
    }
    expect(reset(state)).toEqual(initialClickerState)
});

describe('updateOddsFraction()', () => {
    expect(updateOddsFraction(initialClickerState, {title: "TITLE", denominator: 2, numerator: 1})).toEqual({
        ...initialClickerState,
        oddsString: "50",
        title: "TITLE",
        fraction: {
            numerator: 1,
            denominator: 2,
        },
    })
});

describe('updateOddsPercent()', () => {
    expect(updateOddsPercent(initialClickerState, { title: "TITLE", oddsString: "50" })).toEqual({
        ...initialClickerState,
        oddsString: "50",
        title: "TITLE",
        fraction: {
            numerator: 1,
            denominator: 2,
        },
    })
});