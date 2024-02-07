// 01. Sum First and Last Array Elements
/*
function sumFirstDndLastArrayElements(inputArray) {
    let firstItem = inputArray[0]
    let lastItem = inputArray[inputArray.length - 1]
    let outputResult = firstItem + lastItem
    console.log(outputResult)
}
*/


// 02. Reverse an Array of Numbers
/*
function reverseAnArrayOfNumbers(n, inputArray) {
    let slicesArray = inputArray.slice(0, n).reverse().join(' ')
    console.log(slicesArray)
}
*/


// 03. Even and Odd Subtraction
/*
function evenAndOddSubtraction(inputArray) {

    let evenNumbersArray = inputArray.filter((x) => x % 2 === 0)
    let evenSum = 0 < evenNumbersArray.length ? evenNumbersArray.reduce((a, b) => a + b) : 0

    let oddNumbersArray = inputArray.filter((x) => x % 2 !== 0)
    let oddSum = 0 < oddNumbersArray.length ? oddNumbersArray.reduce((a, b) => a + b) : 0

    let outputResult = evenSum - oddSum
    
    console.log(outputResult)
}
*/


// 04. Substring
/*
function substring(string, firstNumber, secondNumber) {
    console.log(string.slice(firstNumber, firstNumber + secondNumber))
}
*/


// 05. Censored Words
/*
function censoredWords(text, word) {

    let censored = '*'.repeat(word.length)
    let output = text.split(word).join(censored)

    console.log(output)
}
*/


// 06. Count String Occurrences
/*
function countStringOccurrences(text, word) {
    console.log(text.split(' ').filter(x => x === word).length)
}
*/


