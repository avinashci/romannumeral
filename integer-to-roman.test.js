import { expect } from 'chai';

import convertIntegerToRoman from "./integer-to-roman.js";

describe('Roman Numerals API', () => {
    it('return object with correct output', () => {
        const romanNumeral = convertIntegerToRoman("234");

        expect(romanNumeral).to.equal("CCXXXIV");
    });

    it('should return null for numbers > 3999', () => {
        const romanNumeral = convertIntegerToRoman(4199);

        expect(romanNumeral).to.be.null;
    });

    it('should return null for NaN input', () => {
        const romanNumeral = convertIntegerToRoman("123a");

        expect(romanNumeral).to.be.null;
    });
});