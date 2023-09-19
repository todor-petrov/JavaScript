function solve() {
   const firstNameField = document.getElementById('first-name');
   const lastNameField = document.getElementById('last-name');
   const numberOfPeopleField = document.getElementById('people-count');
   const fromDateField = document.getElementById('from-date');
   const daysField = document.getElementById('days-count');
   const nextStepBtn = document.getElementById('next-btn');
   const formContainer = document.querySelector('#append-ticket > div > div > form');
   const ticketInfoContainer = document.querySelector('#info-ticket > div > div > ul');
   const confirmTicketContainer = document.querySelector('#confirm-ticket-section > div > div > ul');
   const mainDivContainer = document.getElementById('main');
   const bodyContainer = document.getElementById('body');

   let data = {'firstName': null, 'lastName': null, 'numberOfPeople': null, 'fromDate': null, 'days': null};

   nextStepBtn.addEventListener('click', ticketPreviewHandler);

   function ticketPreviewHandler(event) {
    if (event) {
        event.preventDefault();
    }
    let inputsAsObject = Array.from(document.getElementsByTagName('input'));
    let inputs = inputsAsObject.map((htmlElement) => htmlElement.value);
    if (inputs.includes('')) {
        return
    }
    for (let key in data) {
        data[key] = inputs.shift();
    }
    let li = htmlCreator('li', ticketInfoContainer, '', 'ticket');
    let article = htmlCreator('article', li);
    htmlCreator('h3', article, `Name: ${data['firstName']} ${data['lastName']}`);
    htmlCreator('p', article, `From date: ${data['fromDate']}`);
    htmlCreator('p', article, `For ${data['days']} days`);
    htmlCreator('p', article, `For ${data['numberOfPeople']} people`);
    let editBtn = htmlCreator('button', li, 'Edit', 'edit-btn');
    let continueBtn = htmlCreator('button', li, 'Continue', 'continue-btn');
    editBtn.addEventListener('click', returnDataHandler);
    continueBtn.addEventListener('click', confirmDataHandler);
    formContainer.reset(); nextStepBtn.disabled = true;
   }
   function returnDataHandler() {
    firstNameField.value = data['firstName']; lastNameField.value = data['lastName'];
    numberOfPeopleField.value = data['numberOfPeople'];
    fromDateField.value = data['fromDate']; daysField.value = data['days'];
    nextStepBtn.disabled = false;
    ticketInfoContainer.innerHTML = '';
   }
   function confirmDataHandler() {
    let li = htmlCreator('li', confirmTicketContainer, '', 'confirm-ticket');
    let article = htmlCreator('article', li);
    htmlCreator('h3', article, `Name: ${data['firstName']} ${data['lastName']}`);
    htmlCreator('p', article, `From date: ${data['fromDate']}`);
    htmlCreator('p', article, `For ${data['days']} days`);
    htmlCreator('p', article, `For ${data['numberOfPeople']} people`);
    ticketInfoContainer.innerHTML = '';
    let confirmBtn = htmlCreator('button', li, 'Confirm', 'confirm-btn');
    let cancelBtn = htmlCreator('button', li, 'Cancel', 'cancel-btn');
    confirmBtn.addEventListener('click', confirmHandler)
    cancelBtn.addEventListener('click', cancelHandler);
   }
   function cancelHandler() {
    confirmTicketContainer.innerHTML = '';
    nextStepBtn.disabled = false;
   }
   function confirmHandler() {
    mainDivContainer.remove();
    htmlCreator('h1', bodyContainer, 'Thank you, have a nice day!', '', 'thank-you');
    let backBtn = htmlCreator('button', bodyContainer, 'Back', '', 'back-btn');
    backBtn.addEventListener('click', reloadPageHandler);
   }
   function reloadPageHandler() {
    location.reload();
   }
   function htmlCreator(type, parent, textContent, className, id) {
    let htmlElement = document.createElement(type);
    parent.appendChild(htmlElement);
    if (textContent) {
        htmlElement.textContent = textContent;
    }
    if (className) {
        htmlElement.classList.add(className);
    }
    if (id) {
        htmlElement.id = id;
    }
    return htmlElement;
   }
}