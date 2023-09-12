function shoppingList(input) {
    let data = [...input];
    let groceries = data.shift().split('!');
    let goShopping = data.pop();
    for (let command of data) {
        command = command.split(' ');
        let operation = command[0]; let product = command[1];
        if (operation === 'Urgent' && !groceries.includes(product)) {
            groceries.unshift(product);
        }
        else if (operation === 'Unnecessary' && groceries.includes(product)) {
            let index = groceries.indexOf(product);
            groceries.splice(index, 1);
        }
        else if (operation === 'Correct' && groceries.includes(product)) {
            let newProduct = command[2];
            let index = groceries.indexOf(product);
            groceries[index] = newProduct;
        }
        else if (operation === 'Rearrange' && groceries.includes(product)) {
            let index = groceries.indexOf(product);
            groceries.splice(index, 1); groceries.push(product);
        }
    }
    console.log(groceries.join(', '));
}