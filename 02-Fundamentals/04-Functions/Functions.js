// // // Lab

// 01. Format Grade
function formatGrade(grade) {
    let grades = ['Fail', 'Poor', 'Good', 'Very good', 'Excellent'];
    let gradesRanges = [[2, 3], [3, 3.50], [3.50, 4.50], [4.50, 5.50], [5.50, 6]];
    let index;
    for (let i = 0; i < gradesRanges.length; i++) {
        if (gradesRanges[i][0] <= grade && grade < gradesRanges[i][1]) {
            index = i;
            break;
        }
    }
    let finalGrade = index !== 0 ? grade.toFixed(2) : 2
    if (index === 0) {
        grade = 2;
        console.log()
    }
    console.log(`${grades[index]} (${finalGrade})`)
}

// 02. Math Power
function mathPower(number, power) {
    console.log(number ** power)
}

// 03. Repeat String
function repeatString(string, count) {
    console.log(string.repeat(count));
}

// 04. Orders
function orders(product, quantity) {
    let priceList = {'coffee': 1.50, 'water': 1.00, 'coke': 1.40, 'snacks': 2.00};
    console.log((priceList[product] * quantity).toFixed(2));
}

// 05. Simple Calculator
function simpleCalculator(a, b, operation) {
    let calculator = {'multiply': `${a * b}`,
                      'divide'  : `${a / b}`,
                      'add'     : `${a + b}`,
                      'subtract': `${a - b}`};
    console.log(calculator[operation]);
}

// 06. Sign Check
function signCheck(...input) {
    let negatives = input.filter(a => a < 0).length;
    result = negatives % 2 === 0 ? 'Positive' : 'Negative';
    console.log(result);
}



// // // Exercise

// 01. Smallest of Three Numbers
function smallestOfThreeNumbers(...numbers) {
    console.log(Math.min(...numbers));
}

// 02. Add and Subtract
function addAndSubtract(a, b, c) {
    const sum = a + b;
    const subtract = sum - c;
    console.log(subtract);
}

// 03. Characters in Range
function charactersInRange(a, b) {
    let aAscii = a.charCodeAt(0);
    let bAscii = b.charCodeAt(0);
    let start = Math.min(aAscii, bAscii);
    let end = Math.max(aAscii, bAscii);
    let result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }
    console.log(result.join(' '))
}

// 04. Odd And Even Sum
function oddAndEvenSum(number) {
    let numberAsString = String(number).split('').map(a => Number(a));
    let oddDigits = numberAsString.filter(a => a % 2 !== 0);
    let evenDigits = numberAsString.filter(a => a % 2 === 0);
    let oddSum = oddDigits.reduce((a, b) => a + b, 0);
    let evenSum = evenDigits.reduce((a, b) => a + b, 0)
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

// 05. Palindrome Integers
function palindromeIntegers(numbers) {
    let numbersAsStrings = numbers.map(a => String(a));
    let result = [];
    for (let i = 0; i < numbersAsStrings.length; i++) {
        let number = numbersAsStrings[i];
        let reversedNumber = number.split('').reverse().join('');
        result.push(number === reversedNumber ? 'true' : 'false');
    }
    console.log(result.join('\n'));
}

// 06. Password Validator
function passwordValidator(password) {
    let passArray = password.split(''); let passwordIsValid = true;
    if (passArray.length < 6 || passArray.length > 10) {
        passwordIsInvalid = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!/^[A-Za-z0-9]+$/.test(password)) {
        passwordIsValid = false;
        console.log('Password must consist only of letters and digits');
    }
    let digitsCount = passArray.filter(x => /^\d+$/.test(x)).length;
    if (digitsCount < 2) {
        passwordIsValid = false;
        console.log('Password must have at least 2 digits');
    }
    if (passwordIsValid) {
        console.log('Password is valid')
    }
}

// 07. NxN Matrix
function nXnMatrix(n) {
    let matrix = Array(n).fill().map(() => Array(n).fill(n));
    matrix.forEach(e => console.log(e.join(' ')));
}

// 08. Perfect Number
function perfectNumber(number) {
    let divisorsSum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            divisorsSum += i;
        }
    }
    if (number === divisorsSum) {
        console.log(`We have a perfect number!`);
    }
    else {
        console.log(`It's not so perfect.`)
    }
}

// 09. Loading Bar
function loadingBar(percentage) {

    let bar = '%'.repeat(percentage / 10) + '.'.repeat(10 - percentage / 10);
    if (percentage === 100) {
        console.log('100% Complete!');
    }
    else {
        console.log(`${percentage}% [${bar}]`);
        console.log('Still loading...');
    }
}

// 10. Factorial Division
function factorialDivision(firstNumber, secondNumber) {
    console.log((factorialFunc(firstNumber) / factorialFunc(secondNumber)).toFixed(2));
    function factorialFunc(a) {
        if (a === 1) {
            return a;
        }
        return a * factorialFunc(a - 1);
    }
}


// // // More Exercise

// 01. Car Wash
function carWash(data) {
    let value = 0; let result = 0;
    let operations = {'soap': 10, 'water': 1.2, 'vacuum cleaner': 1.25, 'mud': 0.90};
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'soap') {
            value += operations[data[i]];
        }
        else {
            value *= operations[data[i]]
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)
}

// 02. Number Modification
function numberModification(number) {
    let numberAsString = String(number).split('');
    let digitsSum = numberAsString.map(x => Number(x)).reduce((a, b) => a + b, 0);
    let averageDigitsSum = digitsSum / numberAsString.length;
    let result = numberAsString.join('');

    while (averageDigitsSum < 5) {
        numberAsString.push('9');
        digitsSum += 9;
        averageDigitsSum = digitsSum / numberAsString.length;
        result = numberAsString.join('');
    }
    console.log(result);
}

// 03. Points Validation
function pointsValidation([x1, y1, x2, y2] ) {
    let result = 'invalid';
    let x1y1ToZero = Math.sqrt(x1 ** 2 + y1 ** 2);
    if (Number.isInteger(x1y1ToZero)) {
        result = 'valid'
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${result}`);
    let x2y2ToZero = Math.sqrt(x2 ** 2 + y2 ** 2);
    if (Number.isInteger(x2y2ToZero)) {
        result = 'valid';
    }
    console.log(`{${x2}, ${y2}} to {0, 0} is ${result}`)
    let x1y1Tox2y2 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    if (Number.isInteger(x1y1Tox2y2)) {
        result = 'valid';
    }
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`)
}

// 04. Radio Crystals
function chrystalFabric(array) {
    let neededThickness = array[0];

    for (let i = 1; i < array.length; i++) {
        let currentThickness = array[i];

        console.log(`Processing chunk ${currentThickness} microns`);

        let cut = (number) => number / 4;
        let lap = (number) => number - number * 0.2;
        let grind = (number) => number - 20;
        let etch = (number) => number - 2;
        let xray = (number) => number + 1;

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;

        while (currentThickness !== neededThickness) {
            while (currentThickness / 4 >= neededThickness) {
                currentThickness = cut(currentThickness);
                cutCount++;
            }
            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            while (currentThickness - currentThickness * 0.2 >= neededThickness) {
                currentThickness = lap(currentThickness);
                lapCount++;
            }
            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            while (currentThickness - 20 >= neededThickness) {
                currentThickness = grind(currentThickness);
                grindCount++;
            }
            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            while (currentThickness - 2 >= neededThickness - 1) {
                currentThickness = etch(currentThickness);
                etchCount++;
            }
            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            if (currentThickness < neededThickness) {
                currentThickness = xray(currentThickness);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${neededThickness} microns`);
    }
}

// 05. Print DNA
function dnaPrint(number) {
  let str = "ATCGTTAGGG";
  let counter = 0;
  for (let i = 0; i < number; i++) {
    if (i % 4 == 0) {
      console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);
    } else if (i % 4 == 1) {
      console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
    } else if (i % 4 == 2) {
      console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
    } else if (i % 4 == 3) {
      console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
    }
    counter += 2;
  }
}