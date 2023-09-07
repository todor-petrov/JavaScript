function solve(input) {
    let line = [...input];
    let horses = line.shift().split('|');
    let i = 0;
    while (line[i] !== 'Finish') {
        let data = line[i].split(' ');
        let command = data[0];
        if (command === 'Retake') {
            let overtakingHorse = data[1];
            let overtakenHorse = data[2];
            let overtakingIndex = horses.indexOf(overtakingHorse);
            let overtakenIndex = horses.indexOf(overtakenHorse);
            if (overtakingIndex < overtakenIndex) {
                [horses[overtakenIndex], horses[overtakingIndex]] = [horses[overtakingIndex], horses[overtakenIndex]];
                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
            }
        }
        else if (command === 'Trouble') {
            let horse = data[1];
            let index = horses.indexOf(horse);
            if (index > 0) {
                [horses[index], horses[index - 1]] = [horses[index - 1], horses[index]];
                console.log(`Trouble for ${horse} - drops one position.`)
            }
        }
        else if (command === 'Rage') {
            let horse = data[1];
            let index = horses.indexOf(horse);
            let maxIndex = horses.length - 1;
            if ((maxIndex - 2) <= index && index <=  maxIndex) {
                horses.splice(index, 1);
                horses.push(horse);
            }
            else {
                horses.splice(index, 1);
                horses.splice(index + 2, 0, horse);
            }
            console.log(`${horse} rages 2 positions ahead.`)
        }
        else {
            let horse = horses.shift(); horses.push(horse);
            console.log(`What a miracle - ${horse} becomes first.`)
        }
        i++;
    }
    console.log(horses.join('->'));
    console.log(`The winner is: ${horses.pop()}`)
}