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