function pianist(input) {
    let data = [...input];
    let n = Number(data.shift());
    let initialPieces = data.splice(0, n);
    let pieces = {};
    for (let currentPiece of initialPieces) {
        let [piece, composer, key] = currentPiece.split('|');
        pieces[piece] = {'composer': composer, 'key': key}
    }
    while (data[0] !== 'Stop') {
        line = data.shift().split('|');
        let command = line[0]; let piece = line[1];
        if (command === 'Add') {
            let composer = line[2]; let key = line[3];
            if (!pieces.hasOwnProperty(piece)) {
                pieces[piece] = {'composer': composer, 'key': key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
            else {
                console.log(`${piece} is already in the collection!`);
            }
        }
        else if (command === 'Remove') {
            if (!pieces.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
            else {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`)
            }
        }
        else {
            let newKey = line[2];
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece]['key'] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    for (let piece in pieces) {
        let composer = pieces[piece]['composer'];
        let key = pieces[piece]['key'];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }
}