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