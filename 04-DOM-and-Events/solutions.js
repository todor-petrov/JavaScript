// // // Lab

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


// // // Exercises


// 01. Subtraction
function subtract() {
    const firstNumberField = document.getElementById('firstNumber');
    const secondNumberField = document.getElementById('secondNumber');
    const result = document.getElementById('result');
    result.textContent = Number(firstNumberField.value) - Number(secondNumberField.value);
}


// 02. Sections
function create(words) {
   const divContent = document.getElementById('content');
   for (let word of words) {
      let div = htmlCreator('div', divContent);
      let p = htmlCreator('p', div, word);
      div.addEventListener('click', loadWordHandler);
      p.style.display = 'none';
   }
   function loadWordHandler() {
      this.firstChild.style.display = 'block';
   }
   function htmlCreator(type, parentNode, textContent) {
      let htmlElement = document.createElement(type);
      parentNode.appendChild(htmlElement);
      if (textContent) {
         htmlElement.textContent = textContent;
      }
      return htmlElement;
   }
}


// 03. Accordion
function toggle() {
    const btn = document.querySelector('#accordion > div.head > span');
    if (btn.textContent === 'More') {
        btn.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }
    else {
        btn.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}


// 04. Locked Profile
function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    for (let btn of buttons) {
        btn.addEventListener('click', showHideHandler);
    }
    function showHideHandler() {
        let profileDiv = this.parentNode;
        let hiddenDiv = profileDiv.getElementsByTagName('div')[0];
        let radioBtn = profileDiv.getElementsByTagName('input')[0];
        if (!radioBtn.checked) {
            if (this.textContent === 'Show more') {
                this.textContent = 'Hide it';
                hiddenDiv.style.display = 'block';
            }
            else {
                this.textContent = 'Show more';
                hiddenDiv.style.display = 'none';
            }
        }
    }
}


// 05. Fill Dropdown
function addItem() {
    const textField = document.getElementById('newItemText');
    const valueField = document.getElementById('newItemValue');
    const select = document.getElementById('menu');
    let option = document.createElement('option');
    option.textContent = textField.value; option.value = valueField.value;
    select.appendChild(option);
    textField.value = ''; valueField.value = '';
}


// 06. Table – Search Engine
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tbody = document.querySelector('body > table > tbody');
      const tableRows = Array.from(document.getElementsByTagName('tr'));
      const substringField = document.getElementById('searchField');
      let substring = substringField.value;
      for (let row of tableRows) {
         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }
      }
      for (let row of tableRows) {
         if (row.textContent.includes(substring)) {
            row.classList.add('select');
         }
      }
      substringField.value = '';
   }
}