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



// More Exercises

// 01. Class Storage
class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    get totalCost() {
        return this.storage.reduce((acc, el) => {return acc + el.price * el.quantity}, 0);
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        return;
    }

    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })
        return output.join('\n');
    }
}

// 02. Catalogue
function orderedCatalogue(array){
    let catalogue = [];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' : ');
        let product = {
            name: elements[0],
            price: parseFloat(elements[1])
        };
        catalogue.push(product);
    }
    // catalogue.sort((a,b) => a.name > b.name ? 1 : -1);
    catalogue.sort((a,b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (const product of catalogue) {
        if (product.name.charAt(0).toUpperCase() === currentLetter){
            console.log(`  ${product.name}: ${product.price}`)
        }else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)

        }
    }
}

// 03. Class Laptop
class Laptop {
        constructor(info, quality) {
            this.info = info;
            this.quality = quality;
            this.producer = info.producer;
            this.age = info.age;
            this.brand = info.brand;
            this.isOn = false;
        }
        turnOn () {
            this.isOn = true;
            this.quality -= 1;
        }
        turnOff () {
            this.isOn = false;
            this.quality -= 1;
        }
        showInfo () {
            return JSON.stringify(this.info);
        }
        get price() {
            return (800 - (this.age * 2) + (this.quality * 0.5))};
    }

// 04. Flight Schedule
function flightSchedule(input) {

    let sectorArray = input[0];
    let cancelledArray = input[1];
    let checkStatus = input[2];

    let flightsData = [];
    for (let element of sectorArray) {

        let number = element.substring(0, element.indexOf(' '));
        let town = element.substring(element.indexOf(' ') + 1);

        let currentFlight = {};
        currentFlight['FlightID'] = number;
        currentFlight['Destination'] = town;
        currentFlight['Status'] = 'Ready to fly';
        flightsData.push(currentFlight);
    }

    let changedFlights = [];
    for (let element of cancelledArray) {
        let number = element.split(' ')[0];
        changedFlights.push(number);
    }

    for (let element of flightsData) {
        if (changedFlights.includes(element.FlightID)) {
            element.Status = 'Cancelled';
        }
    }

    for (let element of flightsData) {
        if (checkStatus[0] === element.Status) {
            console.log(`{ Destination: '${element.Destination}', Status: '${element.Status}' }`)
        }
    }
}

// 05. School Register
function schoolRegister(input) {

    let register = []; let data = [];

    for (let i of input) {
        i = i.split(', ');
        let currentData = {};
        for (let j of i) {
            j = j.split(': ');
            currentData[j[0]] = j[1];
        }
        data.push(currentData);
    }

    for (let a of data) {
        if (a['Graduated with an average score'] >= 3.00) {
            let currentStudent = {};
            let checkGrade = obj => Number(obj['Grade']) === Number(a['Grade']) + 1;
            if (!register.some(checkGrade)) {
                currentStudent['Grade'] = Number(a['Grade']) + 1;
                currentStudent['List of students'] = [a['Student name']];
                currentStudent['Average annual score from last year'] = [Number([a['Graduated with an average score']])];
                register.push(currentStudent)
            }
            else {
                let index = register.findIndex(r => r['Grade'] === Number(a['Grade']) + 1);
                register[index]['List of students'].push(a['Student name']);
                register[index]['Average annual score from last year'].push(Number([a['Graduated with an average score']]));
            }
        }
    }

    register = register.sort((a,b) => a['Grade'] - b['Grade']);

    for (let grade of register) {
        console.log(`${grade['Grade']} Grade`);
        console.log(`List of students: ${grade['List of students'].join(', ')}`);
        let sum = grade['Average annual score from last year'].reduce((a, b) => a + b, 0);
        let length = grade['Average annual score from last year'].length;
        let averageGrade = (sum / length).toFixed(2);
        console.log(`Average annual score from last year: ${averageGrade}`);
        console.log();
    }
}

// 06. Browser History
function browserHistory(dataObj, dataArr) {

    let dataObject =  dataObj;
    let commands = dataArr;

    for (let c of commands) {
        let command = c.substring(0, c.indexOf(' '));
        let site = c.substring(c.indexOf(' ') + 1);

        if (command === 'Open') {
            dataObject['Open Tabs'].push(site);
            dataObject['Browser Logs'].push(c);
        }
        else if (command === 'Close') {
            if (dataObject['Open Tabs'].includes(site)) {
                let index = dataObject['Open Tabs'].indexOf(site);
                dataObject['Open Tabs'].splice(index, 1);
                dataObject['Browser Logs'].push(c);
                dataObject['Recently Closed'].push(site);
            }
        }
        else {
            dataObject['Open Tabs'] = [];
            dataObject['Recently Closed'] = [];
            dataObject['Browser Logs'] = [];
        }
    }
    console.log(dataObject['Browser Name']);
    console.log(`Open Tabs: ${dataObject['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${dataObject['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${dataObject['Browser Logs'].join(', ')}`);
}

// 07. Sequences
function sequences(input) {
    let line = []; let lineAsStrings = [];
    for (let el of input) {
        el = el.replace(/\[|\]/g,'')
               .split(',')
               .map(x => Number(x))
               .sort((a, b) => b - a, 0);
        if (!lineAsStrings.includes(el.toString())) {
            line.push(el);
            lineAsStrings.push(el.toString());
        }
    }
    line = line.sort((a, b) => a.length - b.length);
    for (let arr of line) {
        console.log(`[${arr.join(', ')}]`);
    }
}

// 08. Garage
function garage(input) {
    let info = {};
    for (let data of input) {
        let [garageNumber, carInfo] = data.split(' - ');
        garageNumber = Number(garageNumber);
        carInfo = carInfo.split(', ');
        if (!info.hasOwnProperty(garageNumber)) {
            info[garageNumber] = [];
        }
        let newCar = {};
        for (element of carInfo) {
            let [key, value] = element.split(': ');
            newCar[key] = value;
        }
        info[garageNumber].push(newCar);
    }
    for (let garage in info) {
        console.log(`Garage № ${garage}`);
        for (let car of info[garage]) {
            let result = [];
            for (let prop in car) {
                result.push(`${prop} - ${car[prop]}`);
            }
            console.log(`--- ${result.join(', ')}`);
        }
    }
}

// 09. Armies
function armies(input) {
    let armies = {};
    for (let element of input) {
        if (element.includes('arrives')) {
            let leader = element.replace(' arrives', '');
            armies[leader] = {};
        }
        else if (element.includes(': ')) {
            let [current_leader, info] = element.split(': ');
            if (armies.hasOwnProperty(current_leader)) {
                let [armyName, armyCount] = info.split(', ');
                armyCount = Number(armyCount);
                armies[current_leader][armyName] = armyCount;
            }
        }
        else if (element.includes(' + ')) {
            let [armyName, armyCount] = element.split(' + ');
            for (let boss in armies) {
                let army = armies[boss];
                if (army.hasOwnProperty(armyName)) {
                    army[armyName] += Number(armyCount);
                    break;
                }
            }
        }
        else if (element.includes(' defeated')) {
            let boss = element.replace(' defeated', '');
            if (armies.hasOwnProperty(boss)) {
                delete armies[boss];
            }
        }
    }
    for (let boss in armies) {
        let totalArmiesCount = 0;
        for (let army in armies[boss]) {
            totalArmiesCount += armies[boss][army];
        }
        armies[boss]['TotalArmiesCount'] = totalArmiesCount;
    }

    armies = Object.entries(armies);
    for (let army of armies) {
        army[1] = Object.entries(army[1]);
    }
    armies = armies.sort((a, b) => b[1][b[1].length - 1][1] - a[1][a[1].length - 1][1]);

    for (let a of armies) {
        console.log(`${a[0]}: ${a[1][a[1].length - 1][1]}`);
        delete a[1][a[1].length - 1];
        a[1] = a[1].sort((x, y) => y[1] - x[1]);
        for (let i = 0; i < (a[1].length - 1); i++) {
            console.log(`>>> ${a[1][i][0]} - ${a[1][i][1]}`);
        }
    }
}

// 10. Comments
function comments(input) {
    let usersList = []; let articlesList = []; let data = {};
    for (let string of input) {
        if (string.includes('user ')) {
            let userName = string.replace('user ', '');
            if (!usersList.includes(userName)) {
                usersList.push(userName);
            }
        }
        else if (string.includes('article ')) {
            let article = string.replace('article ', '');
            if (!data.hasOwnProperty(article)) {
                data[article] = [];
            }
        }
        else if (string.includes(' posts on ')) {
            let [userArticleInfo, commentInfo] = string.split(': ');
            let [currentUser, currentArticle] = userArticleInfo.split(' posts on ');
            let [commentTitle, commentContent] = commentInfo.split(', ');
            if (usersList.includes(currentUser) && data.hasOwnProperty(currentArticle)) {
                data[currentArticle].push([currentUser, `${commentTitle} - ${commentContent}`]);
            }
        }
    }
    data = Object.entries(data);
    data = data.sort((a, b) => b[1].length - a[1].length);

    for (let article of data) {
        article[1] = article[1].sort((a, b) => a[0].localeCompare(b[0]));
    }
    for (let article of data) {
        console.log(`Comments on ${article[0]}`);
        for (let userComment of article[1]) {
            console.log(`--- From user ${userComment[0]}: ${userComment[1]}`)
        }
    }
}

// 11. Book Shelf
function bookShelf(input) {
    let shelves = {}; let genres = {}
    for (let data of input) {
        if (data.includes(' -> ')) {
            let[id, genre] = data.split(' -> ');
            if (!shelves.hasOwnProperty(id)) {
                shelves[id] = genre;
                genres[genre] = [];
            }
        }
        else if (data.includes(': ')) {
            let [bookTitle, bookAttributes] = data.split(': ');
            let [bookAuthor, bookGenre] = bookAttributes.split(', ');
            if (Object.values(shelves).includes(bookGenre)) {
                genres[bookGenre].push([bookTitle, bookAuthor]);
            }
        }
    }
    genres = Object.entries(genres);
    genres = genres.sort((a, b) => b[1].length - a[1].length);
    for (let genre of genres) {
        let books = genre[1];
        books = books.sort((a, b) => a[0].localeCompare(b[0]));
    }
    for (let g of genres) {
        let key = Object.keys(shelves).find(key => shelves[key] === g[0]);
        console.log(`${key} ${g[0]}: ${g[1].length}`);
        let books = g[1];
        for (let book of books) {
            console.log(`--> ${book[0]}: ${book[1]}`);
        }
    }
}

// 12. SoftUni Students
function softUniStudents(input) {
    let courses = {}; let students = {};
    for (let data of input) {
        if (data.includes(': ')) {
            let [course, capacity] = data.split(': ');
            if (!courses.hasOwnProperty(course)) {
                courses[course] = [0, []];
            }
            courses[course][0] += Number(capacity);
        }
        else {
            data = data.replace(' with email ', ' ');
            data = data.replace(' joins ', ' ');
            let [user, email, courseName] = data.split(' ');
            user = user.replace(']', '');
            let [userName, credits] = user.split('[');

            if (courses.hasOwnProperty(courseName) && courses[courseName][0] > courses[courseName][1].length) {
                courses[courseName][1].push([credits, userName, email]);
                if (!students.hasOwnProperty(userName)) {
                    students[userName] = [credits, email];
                }
            }
        }
    }
    courses = Object.entries(courses);
    courses = courses.sort((a, b) => b[1][1].length - a[1][1].length);
    for (let c of courses) {
        let students = c[1][1];
        students = students.sort((a, b) => b[0] - a[0]);
    }
    for (let course of courses) {
        let placesLeft = course[1][0] - course[1][1].length;
        console.log(`${course[0]}: ${placesLeft} places left`);
        let members = course[1][1];
        for (let member of members) {
            console.log(`--- ${member[0]}: ${member[1]}, ${member[2]}`);
        }
    }
}