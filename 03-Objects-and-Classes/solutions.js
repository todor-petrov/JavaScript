// Lab

// 01. Person Info
function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

// 02. City
function city(dataCity) {
    let result = []
    for (const key in dataCity) {
       result.push(`${key} -> ${dataCity[key]}`);
    }
    return result.join('\n');
}

// 03. City Taxes
function cityTaxes(name, population, treasury) {
    return {
        name, population, treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },
    };
}

// 04. Convert to Object
function convertToObject(json) {
    let converted = JSON.parse(json);
    for (let key in converted) {
        console.log(`${key}: ${converted[key]}`);
    }
}

// 05. Convert to JSON
function convertToJson(name, lastName, hairColor ) {
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;
    let result = JSON.stringify(person);
    console.log(result);
}

// 06. Phone Book
function phoneBook(data) {
    let info = {};
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i].split(' ');
        let name = data[i][0]; let phoneNumber = data[i][1];
        info[name] = phoneNumber;
    }
    for (const key in info) {
        console.log(`${key} -> ${info[key]}`)
    }
}

// 07. Meetings
function meetings(data) {
    let calendar = {};
    for (let pair of data) {
        let info = pair.split(' ');
        let day = info[0]; let person = info[1];
        if (calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            calendar[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let key in calendar) {
        console.log(`${key} -> ${calendar[key]}`);
    }
}

// 08. Address Book
function addressBook(data) {
    let info = {};
    for (let element of data) {
        let [name, place] = element.split(':');
        info[name] = place;
    }

    let infoSorted = Object.entries(info);
    infoSorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let i = 0; i < infoSorted.length; i++) {
        console.log(`${infoSorted[i][0]} -> ${infoSorted[i][1]}`);
    }
}

// 09. Cats
function cats(data) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];
    for (let i = 0; i < data.length; i++) {
        let catData = data[i].split(' ');
        cats.push(new Cat(catData[0], catData[1]));
    }
    for (let animal of cats) {
        animal.meow();
    }
}

// 10. Songs
function songsFunc(data) {
    let songNumber = data.shift();
    let typeSong = data.pop();
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    for (let i = 0; i < data.length; i++) {
        let songData = data[i].split('_');
        songs.push(new Song(songData[0], songData[1], songData[2]));
    }
    let result = [];
    if (typeSong === 'all') {
        for (let j = 0; j < songs.length; j++) {
            result.push(songs[j].name);
        }
    }
    else {
        for (let k = 0; k < songs.length; k++) {
            if (songs[k].typeList === typeSong) {
                result.push(songs[k].name);
            }
        }
    }
    console.log(result.join('\n'));
}


// Exercises

// 01. Employees
function employees(names) {
    let data = {};
    for (let i = 0; i < names.length; i++) {
        data[names[i]] = names[i].split('').length;
    }
    for (const [key, value] of Object.entries(data)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}

// 02. Towns
function towns(input) {
    let data = [];
    for (let line of input) {
        line = line.split(' | ');
        data.push({ town: line[0], latitude: Number(line[1]).toFixed(2), longitude: Number(line[2]).toFixed(2) });
    }
    data.forEach(item => console.log(item));
}

// 03. Store Provision
function storeProvision(stockProducts, orderedProducts) {
    let stock = {}; let order = {};
    for (let i = 1; i < stockProducts.length; i += 2) {
        if (!stock.hasOwnProperty(stockProducts[i - 1])) {
            stock[stockProducts[i - 1]] = 0;
        }
        stock[stockProducts[i - 1]] += Number(stockProducts[i]);
    }

    for (let i = 1; i < orderedProducts.length; i += 2) {
        if (!order.hasOwnProperty(orderedProducts[i - 1])) {
            order[orderedProducts[i - 1]] = 0;
        }
        order[orderedProducts[i - 1]] += Number(orderedProducts[i]);
    }

    for (let [product, quantity] of Object.entries(order)) {
        if (stock.hasOwnProperty(product)) {
            stock[product] += Number(quantity);
        }
        else {
            stock[product] = Number(quantity);
        }
    }
    for (let [p, q] of Object.entries(stock)) {
        console.log(`${p} -> ${q}`);
    }
}

// 04. Movies
function movies(data) {
    let moviesData = [];
    for (let i = 0; i < data.length; i++) {
        let element = data[i]; let movieInfo = {}; let movieName;
        if (element.includes('addMovie')) {
            let movieName = element.replace('addMovie ', '');
            movieInfo['name'] = movieName;
            moviesData.push(movieInfo);
        }
        else if (element.includes('directedBy')) {
            element = element.split(' directedBy ');
            movieName = element[0];
            let director = element[1];
            for (let j = 0; j < moviesData.length; j++) {
                if (moviesData[j]['name'] === movieName) {
                    moviesData[j]['director'] = director;
                }
            }
        }
        else if (element.includes('onDate')) {
            element = element.split(' onDate ');
            movieName = element[0]; let date = element[1];
            for (let k = 0; k < moviesData.length; k++) {
                if (moviesData[k]['name'] === movieName) {
                    moviesData[k]['date'] = date;
                }
            }
        }
    }
    moviesData.forEach(element => {
        if (element.hasOwnProperty('name') &&
            element.hasOwnProperty('director') &&
            element.hasOwnProperty('date')) {
            console.log(JSON.stringify(element));
        }
    });
}

// 05. Inventory
function inventory(data) {
    let register = [];
    data.forEach(element => {
        let info = element.split(' / '); let hero = {};
        hero['Hero'] = info[0]; hero['level'] = info[1]; hero['items'] = info[2];
        register.push(hero);
    });
    let sortedRegister = register.sort((a, b) => a['level'] - b['level']);

    sortedRegister.forEach(element => {
        for (const [key, value] of Object.entries(element)) {
            if (key === 'Hero') {
                console.log(`${key}: ${value}`);
            }
            else {
                console.log(`${key} => ${value}`);
            }
        }
    });
}

// 06. Word Tracker
function wordsTracker(input) {
    let expression = input.shift();
    let result = {};
    let words = expression.split(' ');
    for (let i = 0; i < words.length; i++) {
        result[words[i]] = 0;
    }
    for (let j = 0; j < input.length; j++) {
        if (result.hasOwnProperty(input[j])) {
            result[input[j]] += 1;
        }
    }
    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);
    for (const element of sortedResult) {
        console.log(`${element[0]} - ${element[1]}`)
    }
}

// 07. Odd Occurrences
function oddOccurrences(input) {
    let line = input.toLowerCase().split(' '); let resultObject = {};
    for (let el of line) {
        if (!resultObject.hasOwnProperty(el)) {
            resultObject[el] = 0;
        }
        resultObject[el] += 1;
    }
    let result = [];
    Object.entries(resultObject).forEach(key => {
        if (key[1] % 2 !== 0) {
            result.push(key[0]);
        }
    })
    console.log(result.join(' '));
}

// 08. Piccolo
function piccolo(input) {
    let obj = {}

    for (let element of input) {
        let [direction, carNumber] = element.split(`, `)
        if (direction == `IN`) {
            if (!obj.hasOwnProperty(carNumber)) {
                obj[carNumber] = null
            }
        } else if (direction == `OUT`) {
            delete obj[carNumber]
        }

    }

    let sorted = Object.keys(obj)
    if (sorted.length >= 1) {
        sorted = sorted.sort()
        for (let element of sorted) {
            console.log(element)
        }
    } else {
        console.log(`Parking Lot is Empty`)
    }
}

// 09. Make a Dictionary
function dictionary(input) {
    let line = [...input]; let words = [];
    let dictBase = [];
    for (let i = 0; i < line.length; i++) {
        let element = JSON.parse(line[i]);
        let word = Object.keys(element)[0];
        let definition = Object.values(element)[0];
        let dataBase = {};
        if (!words.includes(word)) {
            words.push(word);
            dataBase['Term'] = word;
            dataBase['Definition'] = definition;
            dictBase.push(dataBase);
        }
        else {
            let index = dictBase.findIndex(obj => obj.Term === word);
            dictBase[index].Definition = definition;
        }
    }
    let sortedDictionary = dictBase.sort((a, b) => a.Term.localeCompare(b.Term));
    for (let a = 0; a < sortedDictionary.length; a++) {
        let result = [];
        for (let [key, value] of Object.entries(sortedDictionary[a])) {
            result.push(`${key}: ${value}`);
        }
        console.log(result.join(' => '));
    }
}

// 10. Class Vehicle
class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.parts.quality = parts.engine * parts.power;
            this.fuel = fuel;
        }
        drive(fuelLoss) {
            this.fuel -= fuelLoss;
        }
    }