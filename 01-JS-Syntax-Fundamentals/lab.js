// 01. Multiply Number by 2
function solve(number) {
    console.log(number * 2)
}

// 02. Student Information
function studentInfo(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

// 03. Excellent grade
function solve(grade) {
    switch (true) {
        case (grade < 5.50):
            console.log('Not excellent');
            break;
        case (grade >= 5.50):
            console.log('Excellent')
            break;
    }
}

// 04. Month Printer
function monthPrinter(input) {
    let result = '';
    let months = {1: 'January', 2: 'February', 3: 'March', 4: 'April',
                  5: 'May', 6: 'June', 7: 'July', 8: 'August',
                  9: 'September', 10: 'October', 11: 'November', 12: 'December'}
    if (input in months) {
        result = months[input];
    }
    else {
        result = 'Error!'
    }
    console.log(result)
}

// 05. Math Operations
function mathOperations(firstNumber, secondNumber, operator) {
    let result = {'+' : firstNumber +  secondNumber,
                  '-' : firstNumber -  secondNumber,
                  '*' : firstNumber *  secondNumber,
                  '/' : firstNumber /  secondNumber,
                  '%' : firstNumber %  secondNumber,
                  '**': firstNumber ** secondNumber};
    console.log(result[operator]);
}

// 06. Largest Number
function largestNumber(a, b, c) {
    let data = [a, b, c]; let result = Math.max.apply(Number.MIN_SAFE_INTEGER, data);
    console.log(`The largest number is ${result}.`)
}

// 07. Theatre Promotions
function theatrePromotions(typeOfDay, age) {
    let ageRanges = [[0, 18], [19, 64], [65, 122]]; let ageIndex = 0;
    let priceList = {'Weekday': ['12$', '18$', '12$'],
                     'Weekend': ['15$', '20$', '15$'],
                     'Holiday': ['5$', '12$', '10$']};
    if (age < 0 || age > 122) {
        console.log('Error!')
    }
    else {
        for (i = 0; i < ageRanges.length; i ++) {
            if (ageRanges[i][0] <= age && age <= ageRanges[i][1]) {
                ageIndex = i;
                break;
            }
        }
        let price = priceList[typeOfDay][ageIndex];
        console.log(price);
    }
}

// 08. Circle Area
function circleArea(radius) {
    let typeOfVariable = typeof radius;
    if (typeof radius !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfVariable}.`)
    }
    else {
        let result = Math.PI * (radius ** 2);
        console.log(result.toFixed(2));
    }
}

// 09. Numbers from 1 to 5
function numbersFromOneToFive() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// 10. Numbers from M to N
function numbersFromMtoN(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i)
    }
}

// 11. Sum First and Last Array Elements
function sumFirstAndLastArrayElements(line) {
    let result = line[0] + line.slice(-1)[0];
    console.log(result)
}

// 12. Reverse an Array of Numbers
function reverseAnArrayOfNumbers(n, line) {
    let newLine = line.slice(0, n);
    console.log(newLine.reverse().join(' '));
}

// 13. Even and Odd Subtraction
function evenAndOddSubtraction(line) {
    let evenSum = 0; let oddSum = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] % 2 == 0) {
            evenSum += line[i];
        }
        else {
            oddSum += line[i];
        }
    }
    let diff = evenSum - oddSum;
    console.log(diff)
}