function solve() {
    const form = document.querySelector('#append-song > div > div > form');
    const genreField = document.getElementById('genre');
    const nameField = document.getElementById('name')
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const allHitsContainer = document.querySelector('#all-hits > div');
    const likesField = document.querySelector('#total-likes > div > p');
    const inputs = [genreField, nameField, authorField, dateField];
    const savedContainer = document.querySelector('#saved-hits > div');
    let likes = 0;
    addBtn.addEventListener('click', loadDataHandler);

    function loadDataHandler(event) {
        event.preventDefault();
        let fields = inputs.map((input) => input.value);
        if (fields.includes('')) {
            return;
        }
        let [genre, name, author, date] = fields;
        let div = htmlCreator('div', allHitsContainer, '', 'hits-info');
        let img = htmlCreator('img', div); img.src = './static/img/img.png';
        htmlCreator('h2', div, `Genre: ${genre}`);
        htmlCreator('h2', div, `Name: ${name}`);
        htmlCreator('h2', div, `Author: ${author}`);
        htmlCreator('h3', div, `Date: ${date}`);
        let saveBtn = htmlCreator('button', div, 'Save song', 'save-btn');
        let likeBtn = htmlCreator('button', div, 'Like song', 'like-btn');
        let deleteBtn = htmlCreator('button', div, 'Delete', 'delete-btn');
        likeBtn.addEventListener('click', increaseLikesHandler);
        saveBtn.addEventListener('click', moveSongHandler);
        deleteBtn.addEventListener('click', removeSongHandler);
        form.reset();
    }
    function increaseLikesHandler() {
        likes += 1; this.disabled = true;
        likesField.textContent = `Total Likes: ${likes}`;
    }
    function moveSongHandler() {
        let data = this.parentNode.children;
        let imgSrc = data[0].src; let genre = data[1].textContent;
        let name = data[2].textContent;
        let author = data[3].textContent; let date = data[4].textContent;
        let div = htmlCreator('div', savedContainer, '', 'hits-info');
        let img = htmlCreator('img', div); img.src = imgSrc;
        htmlCreator('h2', div, genre); htmlCreator('h2', div, name);
        htmlCreator('h2', div, author); htmlCreator('h3', div, date);
        let deleteBtn = htmlCreator('button', div, 'Delete', 'delete-btn');
        deleteBtn.addEventListener('click', removeSongHandler)
        this.parentNode.remove();
    }
    function removeSongHandler() {
        this.parentNode.remove()
    }
    function htmlCreator(type, parentNode, textContent, className) {
        let htmlElement = document.createElement(type);
        parentNode.appendChild(htmlElement);
        if (textContent) {
            htmlElement.textContent = textContent;
        }
        if (className) {
            htmlElement.classList.add(className);
        }
        return htmlElement;
    }
}