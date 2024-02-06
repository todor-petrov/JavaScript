// 01. Multiply Number By 2 
/*
function mulipyNumberByTwo(muliplierOne) {
    const muliplierTwo = 2;
    let multiply = muliplierOne * muliplierTwo;
    console.log(multiply)
}
*/

// 02. Student Information
/*
function studentInformation(studentName, studentAge, studentGrade) {
    let studentInfo = `Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`
    console.log(studentInfo)
}
*/

// 03. Excellent Grade
/*
function excellentGrade(grade) {
    if (grade >= 5.50) {
        console.log('Excellent')
    }
    else {
        console.log('Not excellent')
    }
}
*/

// 04. Month Printer
/*
function monthPrinter(number) {
    let months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }
    if (number in months) {
        console.log(months[number])
    }
    else {
        console.log('Error!')
    }
}
*/

// 05. Math Operations
/*
function mathOperations(numberOne, numberTwo, operator) {
    let result;
    switch (operator) {
        case '+': result = numberOne + numberTwo; break;
        case '-': result = numberOne - numberTwo; break;
        case '*': result = numberOne * numberTwo; break;
        case '/': result = numberOne / numberTwo; break;
        case '%': result = numberOne % numberTwo; break;
        case '**': result = numberOne ** numberTwo; break;
    }
    console.log(result)
}
*/

// 06. Largest Number
/*
function largestNumber(numberOne, numberTwo, numberThree) {
    let maxNumber = Math.max(numberOne, numberTwo, numberThree);
    console.log(`The largest number is ${maxNumber}.`);
}
*/


// 07. Theatre Promotions
/*
function theatrePromotions(typeOfDay, personAge) {
    let result;
        if (personAge < 0 || 122 < personAge) {
            result = 'Error!';
        } else if (typeOfDay == 'Weekday' && 0 <= personAge && personAge <= 18) {
            result = '12$';
        } else if (typeOfDay == 'Weekend' && 0 <= personAge && personAge <= 18) {
            result = '15$'
        } else if (typeOfDay == 'Holiday' && 0 <= personAge && personAge <= 18) {
            result = '5$';
        } else if (typeOfDay == 'Weekday' && 18 < personAge && personAge <= 64) {
            result = '18$';
        } else if (typeOfDay == 'Weekend' && 18 < personAge && personAge <= 64) {
            result = '20$';
        } else if (typeOfDay == 'Holiday' && 18 < personAge && personAge <= 64) {
            result = '12$';
        } else if (typeOfDay == 'Weekday' && 64 < personAge && personAge <= 122) {
            result = '12$';
        } else if (typeOfDay == 'Weekend' && 64 < personAge && personAge <= 122) {
        result = '15$';
        } else if (typeOfDay == 'Holiday' && 64 < personAge && personAge <= 122) {
        result = '10$';
        }
    console.log(result)
}
*/

// 07. Theatre Promotions
/*
function theatrePromotions(typeOfDay, personAge) {
    let result = ''
    switch(true) {
        case personAge < 0 || 122 < personAge: result = 'Error!'; break;
        case typeOfDay == 'Weekday' && 0 <= personAge && personAge <= 18: result = '12$'; break;
        case typeOfDay == 'Weekend' && 0 <= personAge && personAge <= 18: result = '15$'; break;
        case typeOfDay == 'Holiday' && 0 <= personAge && personAge <= 18: result = '5$'; break;
        case typeOfDay == 'Weekday' && 18 < personAge && personAge <= 64: result = '18$'; break;
        case typeOfDay == 'Weekend' && 18 < personAge && personAge <= 64: result = '20$'; break;
        case typeOfDay == 'Holiday' && 18 < personAge && personAge <= 64: result = '12$'; break;
        case typeOfDay == 'Weekday' && 64 < personAge && personAge <= 122: result = '12$'; break;
        case typeOfDay == 'Weekend' && 64 < personAge && personAge <= 122: result = '15$'; break;
        case typeOfDay == 'Holiday' && 64 < personAge && personAge <= 122: result = '10$'; break;
    }
    console.log(result)
}
*/

// 08. Circle Area
/*
function circleArea(argument) {
    if (typeof argument != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`)
    }
    else {
        let area = Math.PI * argument ** 2
        console.log(area.toFixed(2))
    }
}
*/

// 09. Numbers from 1 to 5
/*
function numbersFromOneToFive() {
    let i = 1
    while (i <= 5) {
    console.log(i)
    i++
    }
}
*/

// 10. Numbers from M to N
/*
function numbersFromMtoN(numberOne, numberTwo) {
    let i
    for (i = numberOne; i >= numberTwo; i--) {
        console.log(i)
    }
}
*/

// 01. Ages
/*
function ages(age) {
    const outOfBounds = 'out of bounds'
    let output = ''
    switch(true) {
        case 0 <= age && age <= 2: output = 'baby'; break;
        case 3 <= age && age <= 13: output = 'child'; break;
        case 14 <= age && age <= 19: output = 'teenager'; break;
        case 20 <= age && age <= 65: output = 'adult'; break;
        case 66 <= age: output = 'elder'; break;
        default: output = 'out of bounds'; break
    }
    console.log(output)
}
*/


// 02. Vacation
/*
function vacation(people, type, day) {

    const STUDENTS_DISCOUNT_COEFFICIENT = 0.85
    const BUSINESS_PEOPLE_DISCOUNT = 10
    const REGULAR_DISCOUNT_COEFFICIENT = 0.95
    
    let priceList = {
        'Students': {'Friday': 8.45, 'Saturday': 9.80, 'Sunday': 10.46},
        'Business': {'Friday': 10.90, 'Saturday': 15.60, 'Sunday': 16.00},
        'Regular': {'Friday': 15.00, 'Saturday': 20.00, 'Sunday': 22.50}
    }

    let totalPrice = priceList[type][day] * people

    switch(true) {
        case type === 'Students' && 30 <= people: totalPrice *= STUDENTS_DISCOUNT_COEFFICIENT; break;
        case type === 'Business' && 100 <= people: totalPrice -= priceList[type][day] * BUSINESS_PEOPLE_DISCOUNT; break;
        case type === 'Regular' && 10 <= people && people <= 20: totalPrice *= REGULAR_DISCOUNT_COEFFICIENT; break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
*/


// 03. Leap Year
/*
function leapYear(year) {
    if (year % 4 === 0 && (year % 10 !== 0 || year % 400 === 0)) {
        console.log('yes')
    } else {
        console.log('no')
    }
}
*/


// 04. Print and Sum
/*
function printAndSum(start, end) {
    let numbersArray = []
    let sum = 0
    for (let i = start; i <= end; i++) {
        numbersArray.push(i)
        sum += i
    }
    console.log(numbersArray.join(' '))
    console.log(`Sum: ${sum}`)
}
*/


// 05. Multiplication Table
/*
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let m = i * number
        console.log(`${number} X ${i} = ${m}`)
    }
}
*/


// 06. Sum Digits
/*
function sumDigits(number) {
    let sum = 0
    let numberAsArrayOfStrings = number.toString().split('')
    numberAsArrayOfStrings.forEach(el => sum += Number(el))
    console.log(sum)
}
*/


// 07. Chars to String
/*
function charsToString(a, b, c) {
    console.log(a.concat(b, c))
}
*/


// 08. Reversed Chars
/*
function reversedChars(a, b, c) {
    let output = [...a, b, c].reverse().join(' ')
    console.log(output)
}
*/


// 09. Fruit
/*
function fruit(typeOfFruit, grams, pricePerKg) {
    let weight = grams / 1000
    let money = weight * pricePerKg
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeOfFruit}.`)
}
*/


// 10. Same Numbers
/*
function sameNumbers(number) {
    let numberAsStingsArray = number.toString().split('')
    let sum = 0
    let sameOrNot = true
    let firstDigit = numberAsStingsArray[0]

    for (let i = 0; i < numberAsStingsArray.length; i++) {
        sum += Number(numberAsStingsArray[i])
        if (numberAsStingsArray[i] !== firstDigit) {
            sameOrNot = false
        }
    }

    console.log(sameOrNot)
    console.log(sum)
}
*/


// 11. Road Radar
/*
function roadRadar(speed, area) {
    let status = ''
    let difference = 0
    let areasLimit = {
                        'motorway': 130,
                        'interstate': 90,
                        'city': 50,
                        'residential': 20
    }
    if (speed <= areasLimit[area]) {
        console.log(`Driving ${speed} km/h in a ${areasLimit[area]} zone`)
    }
    else {
        difference = speed - areasLimit[area]
        switch(true) {
            case difference <= 20: status = 'speeding'; break;
            case difference <= 40: status = 'excessive speeding'; break;
            default: status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areasLimit[area]} - ${status}`)
    }
}
*/


// 12. Cooking by Numbers
/*
function cookingByNumbers(num, ...operations) {
    let number = Number(num)
    for (let i = 0; i < operations.length; i++) {
        switch(true) {
            case operations[i] === 'chop': number /= 2; break;
            case operations[i] === 'dice': number = Math.sqrt(number); break;
            case operations[i] === 'spice': number += 1; break;
            case operations[i] === 'bake': number *= 3; break;
            case operations[i] === 'fillet': number *= 0.8; break;
        }
        console.log(number)
    }
}
*/


// 01. Validity Checker
/*
function validityChecker(x1, y1, x2, y2) {

    let firstCheck = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2)
    let secondCheck = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2)
    let thirdCheck = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    let firstResult = Number.isInteger(firstCheck) ? 'valid' : 'invalid'
    let secondResult = Number.isInteger(secondCheck) ? 'valid' : 'invalid'
    let thirdResult = Number.isInteger(thirdCheck) ? 'valid' : 'invalid'

    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstResult}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondResult}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdResult}`)
}
*/
