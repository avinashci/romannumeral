import express from "express";

import convertIntegerToRoman from "./integer-to-roman.js";

const PORT = process.env.PORT || 8080;
const app = express();

// Use URLSearchParams to parse query string 
app.set("query parser", (queryString) => {
    return new URLSearchParams(queryString);
});

/**
 * For any given input number return the corresponding roman numeral
 */
app.get("/romannumeral", (req, res) => {
    // fetch the number to be converted from the request
    // values sent over as query params will be strings and need to be converted to a Number
    const inputValue = req?.query?.get("num");
    const romanNumeral = convertIntegerToRoman(inputValue);

    // return null if the input value is empty or not a number
    if (romanNumeral) {
        res.status(200).send({
            input: inputValue,
            output: romanNumeral,
        });
    } else {
        res.status(400).send({
            input: inputValue,
            output: "Invalid input!",
        });
    }
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
