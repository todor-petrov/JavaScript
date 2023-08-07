// // // Lab

// // 01. Multiply Number by 2
// function multiplyNumberByTwo(number) {
//     let result = number * 2;
//     console.log(result)
// }

// // 02. Student Information
// function studentInformation(...parameters) {
//     console.log(`Name: ${parameters[0]}, Age: ${parameters[1]}, Grade: ${parameters[2].toFixed(2)}`)
// }

// // 03. Excellent grade
// function excellentGrade(grade) {
//     let result;
//     if (5.50 <= grade) {
//         result = 'Excellent';
//     }
//     else {
//         result = 'Not excellent';
//     }
//     console.log(result)
// }

// // 04. Foreign Languages
// function foreignLanguages(country) {
//     let languages = {'England': 'English', 'USA': 'English',
//                      'Spain': 'Spanish', 'Argentina': 'Spanish', 'Mexico': 'Spanish'};
//     if (country in languages) {
//         console.log(languages[country]);
//     }
//     else {
//         console.log('unknown')
//     }
// }

// 05. Month Printer
// function monthPrinter(number) {
//     let month = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};
//     if (number in month) {
//         console.log(month[number]);
//     }
//     else {
//         console.log('Error!')
//     }
// }

// // 06. Theatre Promotions
// function theatrePromotions(typeOfDay, age) {
//     let ageAreas = [[0, 18], [19, 64], [65, 122]];
//     let priceList = {'Weekday': [12, 18, 12],
//                      'Weekend': [15, 20, 15],
//                      'Holiday': [5, 12, 10]};
//     let index;
//     for (let i = 0; i < ageAreas.length; i++) {
//         if (ageAreas[i][0] <= age && age <= ageAreas[i][1]) {
//             index = i;
//             break;
//         }
//     }
//     if (index !== undefined) {
//         console.log(`${priceList[typeOfDay][index]}$`)
//     }
//     else {
//         console.log('Error!')
//     }
// }

// // 07. Numbers from 1 to 5
// function numbersFromOneToFive() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }

// // 08. Divisible by 3
// function numbersFromOneToFive() {
//     for (let i = 3; i <= 99; i += 3) {
//         console.log(i);
//     }
// }

// // 09. Numbers from N to 1
// function numbersFromNToOne(n) {
//     for (let i = n; 1 <= i; i--) {
//         console.log(i);
//     }
// }

// // 10. Numbers from M to N
// function numbersFromNToOne(m, n) {
//     for (let i = m; n <= i; i--) {
//         console.log(i);
//     }
// }

// // 11. Sum of Odd Numbers
// function sumOfOddNumbers(n) {
//     let j = -1; let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         j += 2;
//         sum += j;
//         console.log(j);
//     }
//     console.log(`Sum: ${sum}`)
// }


// // // Exercise

// // 01. Ages
// function ages(age) {
//     let ageRanges = [[0, 2], [3, 13], [14, 19], [20, 65], [66, Number.MAX_SAFE_INTEGER]];
//     let peopleRanges = ['baby', 'child', 'teenager', 'adult', 'elder'];
//     let index;
//     for(let i = 0; i < ageRanges.length; i++) {
//         if (ageRanges[i][0] <= age && age <= ageRanges[i][1]) {
//             index = i;
//             break;
//         }
//     }
//     if (index !== undefined) {
//         console.log(peopleRanges[index]);
//     }
//     else {
//         console.log('out of bounds')
//     }
// }

// // 02. Rounding
// function rounding(m, n) {
//     if (15 < n) {
//         n = 15;
//     }
//     let result = parseFloat(m.toFixed(n));
//     console.log(result)
// }

// // 03. Division
// function division(number) {
//     let divisors = [10, 7, 6, 3, 2];
//     let divisor;
//     for (let i = 0; i < divisors.length; i++) {
//         if (number % divisors[i] == 0) {
//             divisor = divisors[i];
//             break;
//         }
//     }
//     if (divisor !== undefined) {
//         console.log(`The number is divisible by ${divisor}`)
//     }
//     else {
//         console.debug('Not divisible')
//     }
// }

// // 04. Vacation
// function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
//     let day = ['Friday', 'Saturday', 'Sunday'];
//     let index; let totalPrice = 0;
//     for (let i = 0; i < day.length; i++) {
//         if (dayOfWeek === day[i]) {
//             index = i;
//             break;
//         }
//     }
//     let priceList = {'Students': [8.45, 9.80, 10.46],
//                      'Business': [10.90, 15.60, 16],
//                      'Regular': [15, 20, 22.50]};
//
//     if (typeOfGroup === 'Business' && 100 <= groupOfPeople) {
//         groupOfPeople -= 10;
//     }
//     totalPrice = groupOfPeople * priceList[typeOfGroup][index];
//     if (typeOfGroup === 'Students' && 30 <= groupOfPeople) {
//         totalPrice -= totalPrice * 0.15;
//     }
//     if (typeOfGroup === 'Regular' && (10 <= groupOfPeople && groupOfPeople <= 20)) {
//         totalPrice -= totalPrice * 0.05;
//     }
//     console.log(`Total price: ${totalPrice.toFixed(2)}`)
// }

// // 05. Leap Year
// function leapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log('yes');
//     }
//     else {
//         console.log('no')
//     }
// }

// // 06. Print And Sum
// function printAndSum(a, b) {
//     let sum = 0; let line = [];
//     for (let i = a; i <= b; i++) {
//         sum += i;
//         line.push(i);
//     }
//     console.log(line.join(' '));
//     console.log(`Sum: ${sum}`)
// }

// // 07. Triangle Of Numbers
// function triangleOfNumbers(number) {
//     for (let i = 1; i <= number; i++) {
//         let row = []
//         for (let j = 1; j <= i; j++) {
//             row.push(i);
//         }
//         console.log(row.join(' '));
//     }
// }

// // 08. Multiplication Table
// function multiplicationTable(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} X ${i} = ${n * i}`)
//     }
// }

// // 09. Login
// function login(data) {
//     let username = data[0]; let passwords = data.slice(1);
//     let password = username.split('').reverse().join('');
//     let wrongPasswordCounter = 4
//     for (const word of passwords) {
//         if (word === password) {
//             console.log(`User ${username} logged in.`);
//             break;
//         }
//         else {
//             wrongPasswordCounter -= 1;
//             if (wrongPasswordCounter === 0) {
//                 console.log(`User ${username} blocked!`);
//                 break;
//             }
//             else {
//                 console.log('Incorrect password. Try again.');
//             }
//         }
//     }
// }


// // // More Exercise

// // 01. Sort Numbers
// function sortNumbers(...numbers) {
//     let sorted = numbers.sort((aNum, bNum) => {
//         let result = bNum - aNum;
//         return result;
//     })
//     console.log(sorted.join('\n'))
// }

// // 02. English Name of the Last Digit
// function englishNameOfTheLastDigit(number) {
//     if (number) {
//     let numberAsString = number.toString().split('');
//     let lastDigit = numberAsString.pop();
//     let numbersNames = {'0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
//                         '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'};
//     console.log(numbersNames[lastDigit])
//     }
// }

// // 03. Next Day
// function nextDay(year, month, day) {
//     let date = new Date(year, month - 1, day);
//     date.setDate(date.getDate() + 1);
//     let newYear = date.getFullYear();
//     let newMonth = date.getMonth() + 1;
//     let newDate = date.getDate();
//     console.log(`${newYear}-${newMonth}-${newDate}`);
// }

// // 04. Reverse String
// function reverseString(line) {
//     let result = line.split('').reverse().join('');
//     console.log(result)
// }

// // 05. Distance between Points
// function distanceBetweenPoints(x1, y1, x2, y2) {
//     let y = x2 - x1;
//     let x = y2 - y1;
//     console.log(Math.sqrt(x * x + y * y));
// }function distanceBetweenPoints(x1, y1, x2, y2) {
//     let y = x2 - x1;
//     let x = y2 - y1;
//     console.log(Math.sqrt(x * x + y * y));
// }