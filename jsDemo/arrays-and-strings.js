// 01. Sum First and Last Array Elements
/*
function sumFirstDndLastArrayElements(inputArray) {
    let firstItem = inputArray[0]
    let lastItem = inputArray[inputArray.length - 1]
    let outputResult = firstItem + lastItem
    console.log(outputResult)
}
*/


// 02. Reverse an Array of Numbers
/*
function reverseAnArrayOfNumbers(n, inputArray) {
    let slicesArray = inputArray.slice(0, n).reverse().join(' ')
    console.log(slicesArray)
}
*/


// 03. Even and Odd Subtraction
/*
function evenAndOddSubtraction(inputArray) {

    let evenNumbersArray = inputArray.filter((x) => x % 2 === 0)
    let evenSum = 0 < evenNumbersArray.length ? evenNumbersArray.reduce((a, b) => a + b) : 0

    let oddNumbersArray = inputArray.filter((x) => x % 2 !== 0)
    let oddSum = 0 < oddNumbersArray.length ? oddNumbersArray.reduce((a, b) => a + b) : 0

    let outputResult = evenSum - oddSum
    
    console.log(outputResult)
}
*/


// 04. Substring
/*
function substring(string, firstNumber, secondNumber) {
    console.log(string.slice(firstNumber, firstNumber + secondNumber))
}
*/


// 05. Censored Words
/*
function censoredWords(text, word) {

    let censored = '*'.repeat(word.length)
    let output = text.split(word).join(censored)

    console.log(output)
}
*/


// 06. Count String Occurrences
/*
function countStringOccurrences(text, word) {
    console.log(text.split(' ').filter(x => x === word).length)
}
*/


// 01. Array Rotation
/*
function arrayRotation(inputArray, rotations) {

    for (let i = 0; i < rotations; i++) {
        inputArray.push(inputArray.shift())
    }
    console.log(inputArray.join(' '))
}
*/


// 02. Print every N-th Element from an Array
/*
function printEveryNthElement(stringsArray, step) {

    let output = []

    for (let i = 0; i < stringsArray.length; i+= step) {
        output.push(stringsArray[i])
    }

    return output
}
*/


// 03. List of Names
/*
function listOfNames(namesArray) {
    let output = namesArray.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < output.length; i++) {
        console.log(`${i + 1}.${output[i]}`)
    }
}
*/


// 04. Sorting Numbers
/*
function sortingNumbers(nums) {

    let numbers = nums.sort((a, b) => a - b)
    let output = []

    while (0 < numbers.length) {
        output.push(numbers.shift())
        if (numbers.length !== 0) {
            output.push(numbers.pop())
        }
    }

    return output
}
*/


// 05. Reveal Words
/*
function revealWords(words, text) {

    words = words.split(',').map((x) => x.trim())
    text = text.split(' ')
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (words[i].length === text[j].length && text[j].includes('*')) {
                text[j] = words[i]
            }
        }
    }
    console.log(text.join(' '))
}
*/


// 06. Modern Times of #(HashTag)
/*
function modernTimesOfHashTag(text) {
    regex = /#[a-zA-z]+/g
    let matches = text.match(regex)
    let output = matches.map((x) => x.replace('#', ''))
    console.log(output.join('\n'))
}
*/


// 07. String Substring
/*
function stringSubstring(word, text) {

    text = text.split(' ').map((x) => x.toLowerCase())
    let wordIsNotFound = true
    for (let i = 0; i < text.length; i++) {
        if (text[i] === word) {
            wordIsNotFound = false
            break
        }
    }
    wordIsNotFound ? console.log(`${word} not found!`) : console.log(word)
}
*/


// 08. Pascal-Case Splitter
/*
function pascalCaseSplitter(text) {

    const result = text.split(/(?=[A-Z])/);

    console.log(result.join(', '))
}
*/


// 01. Login
/*
function login(data) {

    const username = data.shift()
    const INCORRECT_PASSWORD_COUNTER = 4
    let counter = 0
    

    for (let i = 0; i < data.length; i++) {

        if (username === data[i].split('').reverse().join('')) {
            console.log(`User ${username} logged in.`)
            break
        }
        else {
            counter += 1
            if (INCORRECT_PASSWORD_COUNTER <= counter) {
                console.log(`User ${username} blocked!`)
                break
            }
            else {
                console.log(`Incorrect password. Try again.`)
            }
        }
    }
}
*/
