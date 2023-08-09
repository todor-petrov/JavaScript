// // // Lab

// 01. 01. Sum First and Last
function sumFirstAndLast(input) {
    console.log(Number(input.shift()) + Number(input.pop()));
}

// 02. Negative or Positive Numbers
function negativeOrPositiveNumbers(input) {
    let line = [...input].map(x => Number(x));
    let result = [];
    for (let n of line) {
        n < 0 ? result.unshift(n) : result.push(n);
    }
    console.log(result.join('\n'));
}

// 03. First and Last K Numbers
function firstAndLastKNumbers(input) {
    let n = input.shift();
    console.log(input.slice(0, n).join(' '));
    console.log(input.slice(input.length - n).join(' '));
}

// 04. Last K Numbers Sequance
function lastKNumbersSequence(n, k) {
    let result = [1];
    for (let i = 0; i < n - 1; i++) {
        let nextNumber = 0; let x = i;
        for (let j = 0; j < k; j++) {
            if (x < 0) {
                break;
            }
            nextNumber += result[x];
            x--;
        }
        result.push(nextNumber);
    }
    console.log(result.join(' '))
}

// 05. Process Odd Numbers
function processOddNumbers(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            result.push(input[i] * 2);
        }
    }
    console.log(result.reverse().join(' '));
}

// 06. Smallest Two Numbers
function smallestTwoNumbers(input) {
    console.log(input.sort((a, b) => a - b).slice(0, 2).join(' '));
}

// 07. List Of Products
function listOfProducts(input) {
    let line = [...input].sort();
    for (let i = 0; i < line.length; i++) {
        console.log(`${(i + 1)}.${line[i]}`);
    }
}

// 08. Array Manipulations
function arrayManipulations(input) {
    let list = [...input];
    let line = list.shift().split(' ').map(x => Number(x));
    for (let el of list) {
        el = el.split(' ');
        if (el.includes('Add')) {
            line.push(Number(el[1]));
        }
        else if (el.includes('Remove')) {
            line = line.filter(x => x !== Number(el[1]));
        }
        else if (el.includes('RemoveAt')) {
            line.splice(Number(el[1]), 1);
        }
        else {
            line.splice(Number(el[2]), 0, Number(el[1]));
        }
    }
    console.log(line.join(' '));
}



// // // Exercise

// 01. Train
function train(input) {
    let wagons = input[0].split(' ').map(x => Number(x));
    let wagonCapacity = Number(input[1]);
    let info = input.slice(2);
    for (let el of info) {
        if (el.includes('Add')) {
            let [command, wagon] = el.split(' ');
            wagon = Number(wagon);
            wagons.push(wagon);
        }
        else {
            let passengers = Number(el);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= wagonCapacity) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

// 