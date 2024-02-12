// 01. Format Grade
/*
function formatGrade(grade) {
    let result = ''
    switch(true) {
        
        case 3 <= grade && grade < 3.50: result = `Poor (${grade.toFixed(2)})`; break;
        case 3.50 <= grade && grade < 4.50: result = `Good (${grade.toFixed(2)})`; break;
        case 4.50 <= grade && grade < 5.50: result = `Very good (${grade.toFixed(2)})`; break;
        case 5.50 <= grade: result = `Excellent (${grade.toFixed(2)})`; break;
        default: case grade < 3: result = `Fail (2)`; break;
    }
    console.log(result)
}
*/


// 02. Math Power
/*
function mathPower(number, power) {
    console.log(Math.pow(number, power))
}
*/

// 03. Repeat String
/*
function repeatString(string, number) {
    console.log(string.repeat(number))
}
*/


// 04. Orders
/*
function orders(product, quantity) {
    let priceList = {
        'coffee': 1.50,
        'coke': 1.40,
        'water': 1.00,
        'snacks': 2.00
    }
    console.log((priceList[product] * quantity).toFixed(2))
}
*/


// 05. Simple Calculator
/*
function simpleCalculator(numberOne, numberTwo, operator) {

    let multiply = (numberOne, numberTwo) => numberOne * numberTwo
    let divide = (numberOne, numberTwo) => numberOne / numberTwo
    let add = (numberOne, numberTwo) => numberOne + numberTwo
    let subtract = (numberOne, numberTwo) => numberOne - numberTwo

    let operations = {multiply, divide, add,subtract}
    console.log(operations[operator](numberOne, numberTwo))
}
*/


// 06. Sign Check
/*
function signCheck(...numbers) {
    let negatives = numbers.filter((x) => x < 0)
    negatives.length % 2 !== 0 ? console.log(`Negative`) : console.log(`Positive`)
}
*/


// 01. Smallest of Three Numbers
/*
function smallestOfThreeNumbers(...numbers) {
    console.log(Math.min(...numbers))
}
*/


// 02. Add and Subtract
/*
function addAndSubtract(a, b, c) {
    let sum = (a, b) => a + b
    let subtract = (sum, c) => sum(a, b) - c
    console.log(subtract(sum, c))
}
*/


// 03. Characters in Range
/*
function charactersInRange (a, b) {

    let points = [a.charCodeAt(), b.charCodeAt()].sort((a, b) => a - b)
    let start = points[0], end = points[1]
    let output = []

    for (let i = start + 1; i < end; i++) {
        output.push(String.fromCharCode(i))
    }

    console.log(output.join(' '))
}
*/


// 04. Odd And Even Sum
/*
function oddAndEvenSum(number) {

    let numberAsArray = Array.from(String(number), Number)
    let evens = numberAsArray.filter((x) => x % 2 == 0).reduce((a, b) => a + b, 0)
    let odds = numberAsArray.filter((x) => x % 2 != 0).reduce((a, b) => a + b, 0)

    console.log(`Odd sum = ${odds}, Even sum = ${evens}`)
}
*/


// 05. Palindrome Integers
/*
function palindromeIntegers(integers) {

    for (let i = 0; i < integers.length; i++) {
        integers[i].toString() === integers[i].toString().split('').reverse().join("") ?
        console.log('true') : console.log('false')
    }
}
*/


// 06. Password Validator
/*
function passwordValidator(password) {

    let passwordIsIncorrect = false
    let regex = /^[A-Za-z0-9]*$/
    let digitsCount = password.match(/\d/g) ? password.match(/\d/g).length : 0
    
    if (password.length < 6 || 10 < password.length) {
        passwordIsIncorrect = true
        console.log('Password must be between 6 and 10 characters')
    }
    if (!password.match(regex)) {
        passwordIsIncorrect = true
        console.log('Password must consist only of letters and digits')
    }
    if (digitsCount < 2) {
        passwordIsIncorrect = true
        console.log('Password must have at least 2 digits')
    }
    if (!passwordIsIncorrect) {
        console.log('Password is valid')
    }
}
*/


// 07. NxN Matrix
/*
function nXnMatrix(number) {

    let row = []
    let matrix = []
    for (let i = 0; i < number; i++) {
        row.push(number)
    }
    for (let i = 0; i < number; i++) {
        matrix.push(row.join(' '))
    }
    console.log(matrix.join('\n'))
}
*/


// 08. Perfect Number
/*
function perfectNumber(number) {
    let divisors = []
    let divisorsSum = 0
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            divisors.push(i)
        }
    }
    0 < divisors.length ? divisorsSum = divisors.reduce((a, b) => a + b) : 0
    divisorsSum === number ?
    console.log('We have a perfect number!') :
    console.log('It\'s not so perfect.')
}
*/


// 09. Loading Bar
/*
function loadingBar(number) {

    let bar = number + '%' + ' '
    let percent = '%', fullStop = '.'
    if (number == 100) {
        console.log(bar + 'Complete!')
        console.log('[' + '%'.repeat(10) + ']')
    }
    else {
        bar += '[' + percent.repeat(number / 10)
        bar += fullStop.repeat(10 - number / 10)
        bar += ']'
        console.log(bar)
        console.log('Still loading...')
    }
}
*/


// 10. Factorial Division
/*
function factorialDivision(a, b) {

    let factorialA = (a, acc = 1) => a == 0 || a == 1 ?
                      acc : factorialA(a - 1, acc * a)
    let factorialB = (b, acc = 1) => b == 0 || b == 1 ?
                      acc : factorialA(b - 1, acc * b)

    console.log((factorialA(a) / factorialB(b)).toFixed(2))
}

factorialDivision(5, 2)
*/


// 01. Car Wash
/*
function carWash(commands) {

    let value = 0
    let soap = () => value += 10
    let water = () => value *= 1.2
    let vacuumCleaner = () => value *= 1.25
    let mud = () => value * 0.9
    let operations = {'soap': soap, 'water': water, 'vacuum cleaner': vacuumCleaner, 'mud': mud}

    for (let i = 0; i < commands.length; i++) {
        value = operations[commands[i]](value)
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`)
}
*/


// 02. Number Modificator
/*
function numberModificator (number) {
    const maxAverageValue = 5
    const additionalNumber = 9
    let numberAsArray = number.toString().split('').map((x) => Number(x))
    
    let averageSumDigits = (numberAsArray) =>
    numberAsArray.reduce((a, b) => a + b) / numberAsArray.length

    while (averageSumDigits(numberAsArray) < maxAverageValue) {
        numberAsArray.push(additionalNumber)
    }
    console.log(numberAsArray.join(''))
}
*/


// 03. Points Validation
/*
function pointsValidation([x1, y1, x2, y2]) {

    let trueOutput = (x1, y1, x2, y2) => `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
    let falseOutput = (x1, y1, x2, y2) => `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`

    let firstCheck = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2))
    Number.isInteger(firstCheck) ?
    console.log(trueOutput(x1, y1, 0, 0)) : console.log(falseOutput(x1, y1, 0, 0))

    let secondCheck = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2))
    Number.isInteger(secondCheck) ?
    console.log(trueOutput(x2, y2, 0, 0)) : console.log(falseOutput(x2, y2, 0, 0))

    let thirdCheck = Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))
    Number.isInteger(thirdCheck) ?
    console.log(trueOutput(x1, y1, x2, y2)) : console.log(falseOutput(x1, y1, x2, y2))
}
*/
