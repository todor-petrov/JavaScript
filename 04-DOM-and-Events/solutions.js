// 01. Sum Numbers
function calc() {
    const firstNumber = Number(document.getElementById('num1').value);
    const secondNumber = Number(document.getElementById('num2').value);
    const result = document.getElementById('sum');
    result.value = Number(firstNumber) + Number(secondNumber);
    document.getElementById('num1').addEventListener('click', clearFields);
    function clearFields(event) {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('sum').value = '';
    }
}


// 02. Show More
function showText() {
    const moreBtn = document.getElementById('more');
    const text = document.getElementById('text');
    moreBtn.style.display = 'none';
    text.style.display = 'inline';
}


// 03. Collect List Items
function extractText() {
    let items = Array.from(document.getElementById('items').children);
    const textArea = document.getElementById('result');
    items = items.map((i) => i.textContent);
    textArea.textContent = items.join('\n');
}


// 04. List of Items
function addItem() {
    const input = document.getElementById('newItemText');
    const newItemText = input.value;
    const items = document.getElementById('items');
    const li = document.createElement('li');

    li.textContent = newItemText;
    items.appendChild(li);
    input.value = '';
}


// 05. Delete from Table
function deleteByEmail() {
    const email = document.getElementsByTagName('input')[0].value;
    console.log(email);
    const tableRows = Array.from(document.querySelectorAll('tbody > tr'));
    let emailIsNotFound = true;
    for (let row of tableRows) {
        if (row.textContent.includes(email)) {
            emailIsNotFound = false;
            let parent = row.parentElement;
            parent.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.'
            break;
        }
    }
    if (emailIsNotFound) {
        document.getElementById('result').textContent = 'Not found.'
    }
}


// 06. Add / Delete
function addItem() {
    const input = document.getElementById('newItemText');
    const ul = document.getElementById('items');
    let newItemText = input.value;

    let li = document.createElement('li');
    let deleteAnchor = document.createElement('a');
    deleteAnchor.href = '#';
    deleteAnchor.addEventListener('click', removeItemHandler);
    li.textContent = newItemText;
    deleteAnchor.textContent = '[Delete]';
    li.appendChild(deleteAnchor);
    ul.appendChild(li);
    input.value = '';

    function removeItemHandler(event) {
        let liAsParent = event.currentTarget.parentNode;
        let ulAsParent = liAsParent.parentNode;
        ulAsParent.removeChild(liAsParent);
    }
}


// 07. Colorize Table
function colorize() {
    const tableRows = Array.from(document.querySelectorAll('tr'));
    for (let r = 0; r < tableRows.length; r++) {
        if (r % 2 !== 0) {
            tableRows[r].style.backgroundColor = 'Teal';
        }
    }
}


// 08. Sum Table
function sumTable() {
    const products = Array.from(document.getElementsByTagName('td'));
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        if (i % 2 !== 0) {
            console.log(products[i])
            totalPrice += Number(products[i].textContent);
        }
    }
    document.getElementById('sum').textContent = totalPrice;
}


// 09. Highlight Active
function focused() {
    const allInputs = Array.from(document.getElementsByTagName('input'));
    for (let input of allInputs) {
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur)
    }
    function handleFocus(event) {
        const currentInput = event.target;
        const parentDiv = currentInput.parentElement;
        parentDiv.classList.add('focused');
    }
    function handleBlur(event) {
        const currentInput = event.target;
        const parentDiv = currentInput.parentElement;
        if (parentDiv.classList.contains('focused')) {
            parentDiv.classList.remove('focused');
        }
    }
}