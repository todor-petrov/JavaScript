// Lab

// 01. Format Grade
function formatGrade(grade) {
    let gradeRanges = [[2, 3], [3, 3.50], [3.50, 4.50], [4.50, 5.50], [5.50, 6.00]];
    let grades = ['Fail', 'Poor', 'Good', 'Very good', 'Excellent']
    let index;
    for (let i = 0; i < gradeRanges.length; i++) {
        if (gradeRanges[i][0] <= grade && grade < gradeRanges[i][1]) {
            index = i; break;
        }
    }
    grade = grade < 3 ? 2 : grade.toFixed(2);
    console.log(`${grades[index]} (${grade})`)
}

// 02. Math Power
function mathPower(a, b) {
    console.log(Math.pow(a, b));
}

// 03. Repeat String
function repeatString(line, count) {
    console.log(line.repeat(count))
}

// 04. Orders
function orders(product, quantity) {
    let priceList = {'coffee': 1.50, 'water': 1.00, 'coke': 1.40, 'snacks': 2.00};
    console.log((priceList[product] * quantity).toFixed(2))
}

// 05. Simple Calculator
function simpleCalculator(firstNumber, secondNumber, operator) {
    let multiply = firstNumber * secondNumber;
    let divide = firstNumber / secondNumber;
    let add = firstNumber + secondNumber;
    let subtract = firstNumber - secondNumber;
    let result = {'multiply': multiply, 'divide': divide,
                  'add': add, 'subtract': subtract};
    console.log(result[operator])
}

// 06. Sign Check
function signCheck(...numbers) {
    let negatives = numbers.filter((num) => num < 0).length;
    console.log(negatives % 2 === 0 ? 'Positive' : 'Negative');
}


// Exercise

// 01. Smallest of Three Numbers
function smallestOfThreeNumbers(...numbers) {
    console.log(Math.min(...numbers))
}

// 02. Add and Subtract
function addAndSubtract(a, b, c) {
    function sum() {
        return a + b;
    }
    function subtract() {
        return sum() - c;
    }
    console.log(subtract());
}

// 03. Characters in Range
function charactersInRange(a, b) {
    let aAscii = a.charCodeAt(); let bAscii = b.charCodeAt();
    let iStart = aAscii <= bAscii ? aAscii : bAscii;
    let iEnd = aAscii <= bAscii ? bAscii : aAscii;
    let characters = []
    for (let i = iStart + 1; i < iEnd; i++) {
        characters.push(String.fromCharCode(i));
    }
    console.log(characters.join(' '))
}

// 04. Odd And Even Sum
function oddAndEvenSum(number) {
    let numberAsString = String(number).split('');
    let numbers = numberAsString.map(i => Number(i));
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    let oddSum = oddNumbers.reduce((a, b) => a + b, 0);
    let evenSum = evenNumbers.reduce((a, b) => a + b, 0);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

// 05. Palindrome Integers
function palindromeIntegers(numbers) {
    let numbersAsStrings = numbers.map(i => i.toString());
    let result = numbersAsStrings
      .map(i => i === i.split('')
      .reverse()
      .join('') ? 'true' : 'false');
    console.log(result.join('\n'));
}

// 06. Password Validator
function passwordValidator(word) {
    let password = word.split('');
    let passwordIsNotValid = false;
    if (6 > password.length || password.length > 10) {
        console.log(`Password must be between 6 and 10 characters`)
        passwordIsNotValid = true;
    }

    let symbolsCount = password.filter(i => !/^[A-Za-z0-9]*$/.test(i));
    if (symbolsCount.length !== 0) {
        console.log(`Password must consist only of letters and digits`);
        passwordIsNotValid = true;
    }

    let digitsCount = password.filter(i => /^\d+$/.test(i));
    if (digitsCount.length < 2) {
        console.log(`Password must have at least 2 digits`);
        passwordIsNotValid = true;
    }
    if (!passwordIsNotValid) {
        console.log(`Password is valid`);
    }
}

// 07. NxN Matrix
function nXnMatrix(number) {
    row = [];
    for (let i = 1; i <= number; i++) {
        row.push(number);
    }
    for (let j = 1; j <= number; j++) {
        console.log(row.join(' '))
    }
}

// 08. Perfect Number
function perfectNumber(number) {
    let numberIsPerfect = false;
    let divisors = [];
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    let sumDivisors = divisors.reduce((a, b) => a + b, 0);
    if (number > 0 && sumDivisors === number) {
        numberIsPerfect = true;
    }
    console.log(numberIsPerfect ? 'We have a perfect number!' : `It's not so perfect.`)
}

// 09. Loading Bar
function loadingBar(percent) {
    let bar = ('.'.repeat(10)).split('');
    let symbols = percent / 10;
    for(let i = 0; i < symbols; i++) {
        bar[i] = '%';
    }
    if (symbols === 10) {
        console.log('100% Complete!')
    }
    else {
        console.log(`${percent}% [${bar.join('')}]`);
        console.log('Still loading...');
    }
}

// 10. Factorial Division
function factorialDivision(a, b) {
    let aFactorial = 1; let bFactorial = 1;
    for (let i = 1; i <= a; i++) {
        aFactorial *= i;
    }
    for (let j = 1; j <= b; j++) {
        bFactorial *= j;
    }
    let result = (aFactorial / bFactorial).toFixed(2);
    console.log(result)
}