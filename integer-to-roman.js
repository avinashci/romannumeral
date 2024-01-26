const MAX_VALUE = 3999;

/**
 * For any given input number return the corresponding roman numeral
 * Valid input values range from 1-3999
 */
const convertIntegerToRoman = (inputValue) => {
    let num = Number(inputValue);

    // Return null for invalid entries
    if (isNaN(num) || num <= 0 || num > MAX_VALUE ) {
        return null;
    }

    // predefined map of roman numerals
    const romanNumeralsMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let romanNumeral = "";

    // for each roman numeral in the map
    // 1. Get the value for the roman numeral
    // 2. Reduce the value corresponding to the numeral from the input value until it goes below zero
    // 3. On each iteration append the romanNumeral to a variable
    for (let numeral in romanNumeralsMap) {
        const valueAtIndex = romanNumeralsMap[numeral];

        while (num - valueAtIndex >= 0) {
            romanNumeral += numeral;
            num = num - valueAtIndex;
        }
    }

    return romanNumeral;
};

export default convertIntegerToRoman;
