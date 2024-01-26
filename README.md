# roman numeral

API to convert a given Number to Roman Numeral
The main purpose of this repository is to show a project setup and workflow for writing microservice. 

## Pre-requisites
- Install [Node.js](https://nodejs.org/en/)
- Be sure to have `git` available

If the installation was successful, you should be able to run the following command.

```
$ node --version
v8.11.3

$ npm --version
6.1.0
```

## Getting started
- Clone the repository
```
git clone git@github.com:avinashci/romannumeral.git
```
- Install dependencies
```
cd romannumeral
npm install
```
- Build and run the project
```
npm start
```

- API endpoints

  romannumeral Endpoint : http://localhost:8080/romannumeral


## Example usage
```
    async () => {
        const romanNumneral = await fetch('http://localhost:8080/romannumeral?num=234');
    }

    // OUTPUT - romanNumneral
    {
        input: "234"
        output: "CCXXXIV"
    }
```

## Running tests using NPM Scripts
Test files are placed along side the source files.
To run the test execute the below command.
````
npm run test

````
