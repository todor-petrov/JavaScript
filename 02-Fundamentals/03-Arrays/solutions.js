// Lab

// 01. Sum First and Last Array Elements
function sumFirstAndLastArrayElements(line) {
    console.log(line.shift() + line.pop())
}

// 02. Day of Week
function dayOfWeek(index) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(1 <= index && index <= 7 ? days[index - 1] : 'Invalid day!')
}

// 03. Reverse an Array of Numbers
function reverseAnArrayOfNumbers(number, line) {
    let newLine = line.slice(0, number).reverse();
    console.log(newLine.join(' '));
}

// 04. Reverse in Place
function reverseInPlace(line) {
    console.log(line.reverse().join(' '))
}

// 05. Sum Even Numbers
function sumEvenNumbers(line) {
    let newLine = line.map(i => Number(i)).filter(i => i % 2 === 0);
    let result = (0 < newLine.length ? newLine.reduce((a, v) => a += v) : 0);
    console.log(result);
}

// 06. Even and Odd Subtraction
function evenAndOddSubtraction(line) {
    let evenSum = 0; let oddSum = 0;
    for (let i = 0; i < line.length; i++) {
        line[i] % 2 === 0 ? evenSum += line[i] : oddSum += line[i];
    }
    console.log(evenSum - oddSum);
}

// 07. Equal Arrays
function equalArrays(firstArray, secondArray) {
    let sum = 0; let arraysAreIdentical = true; let index;
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] === secondArray[i]) {
            sum += Number(firstArray[i]);
        }
        else {
            index = i;
            arraysAreIdentical = false;
            break;
        }
    }
    if (arraysAreIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
    else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}

// 08. Condense Array to Number
function condenseArrayToNumber(line) {
    let data = [...line];
    while (data.length !== 1) {
        let currentArray = []
        for (let i = 1; i < data.length; i++) {
            currentArray.push(data[i - 1] + data[i]);
        }
        data = currentArray;
    }
    console.log(data[0]);
}



// // // Exercise

// 01. Add and Subtract
function addAndSubtract(input) {
    let line = []; let sumInput = 0; let sumLine = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            line.push(input[i] + i);
        }
        else {
            line.push(input[i] - i);
        }
    }
    sumInput = input.reduce((a, b) => a + b, 0);
    sumLine = line.reduce((a, b) => a + b, 0);
    console.log(line);
    console.log(sumInput);
    console.log(sumLine);
}

// 02. Common Elements
function commonElements(firstArray, secondArray) {
    let intersection = firstArray.filter(element => secondArray.includes(element));
    console.log(intersection.join('\n'));
}

// 03. Merge Arrays
function mergeArrays(firstArray, secondArray) {
    let newArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            newArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        }
        else {
            newArray.push(firstArray[i] + secondArray[i]);
        }
    }
    console.log(newArray.join(' - '))
}

// 04. Array Rotation
function arrayRotation(line, count) {
    while (1 <= count) {
        line.push(line.shift());
        count -= 1;
    }
    console.log(line.join(' '));
}

// 05. Max Number
function maxNumber(input) {
    let line = [...input]; let result = [];
    while (0 < line.length) {
        let maxElement = line.shift();
        let numberIsMax = true;
        for (let i = 0; i < line.length; i++) {
            if (maxElement <= line[i]) {
                numberIsMax = false;
                break;
            }
        }
        if (numberIsMax) {
            result.push(maxElement);
        }
    }
    console.log(result.join(' '))
}

// 07. Max Sequence of Equal Elements
function maxSequenceOfEqualElements(input) {
    let line = [...input]; let maxSequence = [];
    let currentSequence = [];

    while (0 < line.length) {
        let element = line.shift();
        if (currentSequence.length === 0 || currentSequence.includes(element)) {
            currentSequence.push(element);
            if (currentSequence.length > maxSequence.length) {
                maxSequence = [...currentSequence];
            }
        }
        else {
            currentSequence = [];
            currentSequence.push(element);
        }
    }
    console.log(maxSequence.join(' '));
}

// 08. Magic Sum
function magicSum(inputArray, inputInt) {
    let line = [...inputArray]; let number = inputInt;
    while (0 < line.length) {
        let currentNumber = line.shift();
        for (let i = 0; i < line.length; i++) {
            if (currentNumber + line[i] === number) {
                console.log(`${currentNumber} ${line[i]}`);
            }
        }
    }
}

// 09. Dungeonest Dark
function dungeonDark(input) {
    let dungeonsRooms = [...input[0].split('|')];
    let initialHealth = 100; let initialCoins = 0;
    let bestRoom = 0; let youDied = false;
    while(0 < dungeonsRooms.length) {
        let currentRoom = dungeonsRooms.shift().split(' ')
        let keyWord = currentRoom[0]; let value = Number(currentRoom[1]);
        bestRoom += 1;
        if (keyWord === 'potion') {
            if (100 < (initialHealth + value)) {
                value = (100 - initialHealth)
            }
            initialHealth += value;
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        }
        else if (keyWord === 'chest') {
            initialCoins += value;
            console.log(`You found ${value} coins.`)
        }
        else {
            let monster = keyWord; let attack = value;
            initialHealth -= attack;
            if (0 < initialHealth) {
                console.log(`You slayed ${monster}.`)
            }
            else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                youDied = true;
                break;
            }
        }
    }
    if (!youDied) {
        let result = [`You've made it!`, `Coins: ${initialCoins}`, `Health: ${initialHealth}`];
        console.log(result.join('\n'));
    }
}



// // // More Exercise

// 01. Print N-th Element
function printNthElement(input) {
    let line = [...input]; let step = Number(line.pop()); let result = [];
    for (let i = 0; i < line.length; i += step) {
        result.push(line[i]);
    }
    console.log(result.join(' '));
}

// 02. Add and Remove
function addAndRemove(input) {
    let commands = [...input]; let result = [];
    for (let i = 0; i < commands.length; i++) {
        let number = i + 1;
        commands[i] === 'add' ? result.push(number) : result.pop();
    }
    console.log(result.length > 0 ? result.join(' ') : 'Empty')
}

// 03. Rotate Array
function rotateArray(input) {
    let line = [...input]; let rotations = line.pop();
    for (let i = 1; i <= rotations; i++) {
        line.unshift(line.pop());
    }
    console.log(line.join(' '));
}

// 04. Non-Decreasing Subset
function nonDecreasingSubset(input) {
    let line = [...input]; let max = line[0];
    let result = line.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));
}

// 05. Tseam Account
function tseamAccount(input) {
    let info = [...input];
    let account = info.shift().split(' ');
    let play = info.pop();
    for (let i = 0; i < info.length; i++) {
        let currentData = info[i].split(' ');
        let command = currentData[0]; let game = currentData[1];
        if (command === 'Install' && !account.includes(game)) {
            account.push(game);
        }
        else if (command === 'Uninstall' && account.includes(game)) {
            account = account.filter(item => item !== game);
        }
        else if (command === 'Update' && account.includes(game)) {
            account = account.filter(item => item !== game);
            account.push(game);
        }
        else {
            let gameWithExpansion = game.split('-');
            let gameName = gameWithExpansion[0]; let expansion = gameWithExpansion[1];
            if (account.includes(gameName) && !account.includes(game)) {
                let gameIndex = account.indexOf(gameName);
                account.splice(gameIndex + 1, 0, `${gameName}:${expansion}`);
            }
        }
    }
    console.log(account.join(' '))
}

// 06. Magic Matrices
function magicMatrices(input) {
    let matrix = [...input]; let magicSum = matrix[0].reduce((a, b) => a + b, 0);
    let matrixIsMagic = true;
    for (let row = 0; row < matrix.length; row++) {
        let currentSum = matrix[row].reduce((a, b) => a + b, 0);
        if (currentSum !== magicSum) {
            matrixIsMagic = false;
            break;
        }
    }
    if (matrixIsMagic) {
        for (let c = 0; c < matrix.length; c++) {
            let currentSum = 0;
            for (let r = 0; r < matrix.length; r++) {
                currentSum += matrix[r][c];
            }
            if (currentSum !== magicSum) {
                matrixIsMagic = false;
                break;
            }
        }
    }
    console.log(matrixIsMagic ? 'true' : 'false')
}

// 07. Spiral Matrix
function spiralMatrix(rows, cols) {
    let matrix = Array.from(Array(rows), () => new Array(cols));
    let row = 0; let col = 0;
    let rowEnd = rows - 1; let colEnd = cols - 1;
    let counter = 1;

    while (col <= colEnd && row <= rowEnd) {
        for (let i = col; i <= colEnd; i++) {
            matrix[row][i] = counter;
            counter++;
        }
        row++;
        for (let i = row; i <= rowEnd; i++) {
            matrix[i][colEnd] = counter;
            counter++;
        }
        colEnd--;
        for (let i = colEnd; i >= col; i--) {
            matrix[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;
        for (let i = rowEnd; i >= row; i--) {
            matrix[i][col] = counter;
            counter++;
        }
        col++;
    }
    matrix.forEach(e => console.log(e.join(' ')))
}

// 08. Diagonal Attack
function diagonalAttack(input) {
    let matrix = []; let matrixIsMagic = false;
    let rows = input.length; let cols = rows;
    for (let i = 0; i < input.length; i++) {
        let row = input[i].split(' ');
        matrix.push(row);
    }
    let rightDiagonalSum = 0;
    for (let i = 0; i < rows; i++) {
        rightDiagonalSum += Number(matrix[i][i]);
        matrix[i][i] = Number(matrix[i][i]);
    }
    let leftDiagonalSum = 0; let j = rows - 1;
    for (let i = 0; i < rows; i++) {
        leftDiagonalSum += Number(matrix[i][j]);
        matrix[i][j] = Number(matrix[i][j]);
        j -= 1;
    }
    if (rightDiagonalSum === leftDiagonalSum) {
        let magicSum = rightDiagonalSum;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows; j++) {
                if (typeof matrix[i][j] !== 'number') {
                    matrix[i][j] = magicSum;
                }
            }
        }
        matrix.forEach(e => console.log(e.join(' ')));
    }
    else {
        matrix.forEach(e => console.log(e.join(' ')));
    }
}

// 09. Orbit
function orbit(input) {
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];

    let matrix = [];
    for(let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}