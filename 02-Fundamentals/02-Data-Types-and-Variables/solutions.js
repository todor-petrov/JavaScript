// // // Lab

// // 01. Echo Type
// function echoType(parameter) {
//     let allowedTypes = ['string', 'number'];
//     console.log(typeof parameter);
//     if (allowedTypes.includes(typeof parameter) ) {
//         console.log(parameter);
//     }
//     else {
//         console.log('Parameter is not suitable for printing')
//     }
// }

// // 02. Concatenate Names
// function concatenateNames(firstName, lastName, delimiter) {
//     console.log(`${firstName}${delimiter}${lastName}`)
// }

// // 03. Right Place
// function rightPlace(incompleteWord, char, word){
//
//     let i = incompleteWord.split('').indexOf('_', 0);
//     if (char === word.split('')[i]) {
//         console.log('Matched')
//     }
//     else {
//         console.log('Not Matched')
//     }
// }

// // 04. Integer and Float
// function integerAndFloat(...numbers) {
//     let result = numbers.reduce((a, b) => a + b, 0);
//     let typeOfResult = 'Integer';
//     if (!Number.isInteger(result)) {
//         typeOfResult = 'Float'
//     }
//     console.log(`${result} - ${typeOfResult}`)
// }

// // 05. Amazing Numbers
// function amazingNumbers(number) {
//     let numberAsString = number.toString().split('');
//     let sumDigits = numberAsString.reduce((a, b) => Number(a) + Number(b), 0);
//     let result = sumDigits.toString().split('');
//     let trueOrFalse = 'True';
//     if (!result.includes('9', 0)) {
//         trueOrFalse = 'False';
//     }
//
//     console.log(`${number} Amazing? ${trueOrFalse}`)
// }

// 06. Gramophone
// function gramophone(band, album, song) {
//     let songDuration = (band.length * album.length) * song.length / 2;
//     let oneRotation = 2.5;
//     let rotations = Math.ceil(songDuration / oneRotation);
//     console.log(`The plate was rotated ${rotations} times.`)
// }

// // 07. Required reading
// function requiredReading(totalPages, pagesPerHour, days) {
//     let hours = (totalPages / pagesPerHour) / days;
//     console.log(hours)
// }

// // 08. Centuries to Minutes
// function centuriesToMinutes(centuries) {
//     let years = centuries * 100;
//     let days = Math.floor(years * 365.2422);
//     let hours = days * 24;
//     let minutes = hours * 60;
//     console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
// }

// // 09. Special Numbers
// function specialNumbers(n) {
//     let allowedNumbers = [5, 7, 11];
//     for (let i = 1; i <= n; i++) {
//         let trueOrFalse = 'False';
//         let currentNumber = i.toString().split('');
//         let sumNumbers = currentNumber.reduce((a, b) => Number(a) + Number(b), 0);
//         if (allowedNumbers.includes(sumNumbers)) {
//             trueOrFalse = 'True';
//         }
//         console.log(`${i} -> ${trueOrFalse}`)
//     }
// }

// // 10. Triples of Latin Letters
// function triplesOfLatinLetters(numberAsString) {
//     let number = Number(numberAsString);
//     for (let i = 97; i < 97 + number; i++) {
//         let a = String.fromCharCode(i);
//         for (let j = 97; j < 97 + number; j++) {
//             let b = String.fromCharCode(j);
//             for (let k = 97; k < 97 + number; k++) {
//                 let c = String.fromCharCode(k);
//                 console.log(`${a}${b}${c}`);
//             }
//         }
//     }
// }



// // // Exercise

// // 01. Sum Digits
// function sumDigits(number) {
//     let numberAsString = number.toString().split('');
//     let result = numberAsString.reduce((a, b) => Number(a) + Number(b), 0);
//     console.log(result)
// }

// // 02.Chars to String
// function charsToString(a, b, c) {
//     console.log(`${a}${b}${c}`);
// }

// // 03.Town Info
// function townInfo(town, population, area) {
//     console.log(`Town ${town} has population of ${population} and area ${area} square km.`)
// }

// // 04. Convert Meters to Kilometres
// function convertMetersToKilometers(meters) {
//     let result = (meters / 1000).toFixed(2);
//     console.log(result)
// }

// // 05. Pounds to Dollars
// function poundsToDollars(pounds) {
//     let exchangeRate = 1.31;
//     let dollars = (pounds * exchangeRate).toFixed(3);
//     console.log(dollars);
// }

// // 06.Reversed Chars
// function reversedChars(...chars) {
//     console.log(chars.reverse().join(' '))
// }

// // 07. Lower or Upper
// function lowerOrUpper(letter) {
//     console.log(letter === letter.toUpperCase() ? 'upper-case' : 'lower-case');
// }

// // 08. Calculator
// function calculator(a, operator, b) {
//     let result;
//     if (operator === '+') {
//         result = a + b;
//     }
//     else if (operator === '-') {
//         result = a - b;
//     }
//     else if (operator === '/') {
//         result = a / b;
//     }
//     if (operator === '*') {
//         result = a * b;
//     }
//     console.log(result.toFixed(2))
// }

// // 09. Gladiator Expenses
// function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
//
//     let expenses = 0; let shieldCounter = 0;
//     for (let i = 1; i <= lostFightsCount; i++) {
//         if (i % 2 === 0) {
//             expenses += helmetPrice;
//         }
//         if (i % 3 === 0) {
//             expenses += swordPrice;
//             if (i % 2 === 0) {
//                 expenses += shieldPrice;
//                 shieldCounter += 1;
//                 if (shieldCounter === 2) {
//                     expenses += armorPrice;
//                     shieldCounter = 0;
//                 }
//             }
//         }
//     }
//     console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
// }

// // 10. Spice Must Flow
// function spiceMustFlow(yield) {
//     let minedSpice = 0; let days = 0;
//     while (100 <= yield) {
//         minedSpice += (yield - 26);
//         days += 1;
//         yield -= 10;
//     }
//     minedSpice -= 26;
//     if (minedSpice < 0) {
//         minedSpice = 0;
//     }
//     console.log(days);
//     console.log(minedSpice);
// }


// // // More Exercise

// // 01. Digits with Words
// function digitsWithWords(word) {
//     switch (word) {
//         case 'zero':
//             console.log(0);
//         break;
//         case 'one':
//             console.log(1);
//         break;
//         case 'two':
//             console.log(2);
//         break;
//         case 'three':
//             console.log(3);
//         break;
//         case 'four':
//             console.log(4);
//         break;
//         case 'five':
//             console.log(5);
//         break;
//         case 'six':
//             console.log(6);
//         break;
//         case 'seven':
//             console.log(7);
//         break;
//         case 'eight':
//             console.log(8);
//         break;
//         case 'nine':
//             console.log(9);
//         break;
//     }
// }

// // 02. Prime Number Checker
// function primeNumberChecker(number) {
//     let numberIsPrime = true
//     if (number !== 0 && number !== 1) {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 numberIsPrime = false
//             }
//         }
//     }
//     console.log(numberIsPrime ? 'true' : 'false')
// }

// // 03. Cone
// function cone(radius, height) {
//     let volume = (Math.PI * (radius ** 2) * height) / 3;
//     let l = Math.sqrt(height ** 2 + radius ** 2);
//     let area = Math.PI * (radius ** 2) + Math.PI * radius * l;
//     console.log(`volume = ${volume.toFixed(4)}`);
//     console.log(`area = ${area.toFixed(4)}`)
// }

// // 05. Binary to Decimal
// function binaryToDecimal(input) {
//     let binary = parseInt(input, 2);
//     console.log(binary);
// }

// // 06. Chess Board
// function chessBoard(size) {
//     let html = `<div class="chessboard">\n`;
//     for (let row = 0; row < size; row++) {
//         html += `  <div>\n`;
//         let color = (row % 2 == 0) ? "black" : "white";
//         for (let col = 0; col < size; col++) {
//             html += `    <span class="${color}"></span>\n`;
//             color = (color == "white") ? "black" : "white";
//         }
//         html += `  </div>\n`;
//     }
//     return html + `</div>`;
// }

// // 07. Triangle Area
// function triangleArea(a, b, c) {
//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     console.log(area)
// }