
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const loadBtn = document.getElementById('load-product');
    const addBtn = document.getElementById('add-product');
    const updateProductBtn = document.getElementById('update-product');
    const tbody = document.getElementById('tbody');
    const form = document.querySelector('#signup > form');
    const productField = document.getElementById('product');
    const countField = document.getElementById('count');
    const priceField = document.getElementById('price');
    loadBtn.addEventListener('click', loadDataHandler);
    addBtn.addEventListener('click', addProductHandler);
    updateProductBtn.addEventListener('click', updateHandler);
    let productId;
    function loadDataHandler(event) {
        if (event) {
            event.preventDefault();
        }
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((response) => {
                let data = Object.values(response);
                tbody.innerHTML = '';
                for (let object of data) {
                    let product = object['product']; let count = object['count'];
                    let price = object['price']; let id = object['_id'];
                    let tr = htmlCreator('tr', tbody);
                    htmlCreator('td', tr, product, 'name');
                    htmlCreator('td', tr, count, 'count-product');
                    htmlCreator('td', tr, price, 'product-price');
                    let tdButtons = htmlCreator('td', tr, '', 'btn');
                    let updateBtn = htmlCreator('button', tdButtons, 'Update', 'update', id);
                    let deleteBtn = htmlCreator('button', tdButtons, 'Delete', 'delete', id);
                    deleteBtn.addEventListener('click', removeProductHandler);
                    updateBtn.addEventListener('click', loadProductHandler);
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }
    function addProductHandler(event) {
        if (event) {
            event.preventDefault();
        }
        let product = productField.value;
        let count = countField.value;
        let price = priceField.value;
        if (product === '' || count === '' || price === '') {
            return;
        }
        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({product, count, price})
        }
        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                tbody.innerHTML = '';
                form.reset();
                loadDataHandler();
            })
            .catch((err) => {
                console.error(err);
            })
    }
    function removeProductHandler() {
        productId = this.id;
        let httpHeaders = {method: 'DELETE'};
        fetch(`${BASE_URL}${productId}`, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                tbody.innerHTML = '';
                loadDataHandler();
            })
            .catch((err) => {
                console.error(err);
            })
    }
    function loadProductHandler() {
        productId = this.id;
        let tr = this.parentNode.parentNode;
        let elements = tr.children;
        productField.value = elements[0].textContent; countField.value = elements[1].textContent;
        priceField.value = elements[2].textContent;
        updateProductBtn.disabled = false; addBtn.disabled = true;
    }
    function updateHandler() {
        let httpHeaders = {method: 'PATCH', body: JSON.stringify({
            product: productField.value,
            count: countField.value,
            price: priceField.value
        })};
        fetch(`${BASE_URL}${productId}`, httpHeaders)
            .then(() => {
                loadDataHandler();
                productField.value = '', countField.value = '';
                priceField.value = ''; addBtn.disabled = false;
                updateProductBtn.disabled = true;
            })
            .catch((err) => {
                console.error(err);
            })
    }
    function htmlCreator(type, parentNode, textContent, className, id) {
        let htmlElement = document.createElement(type);
        parentNode.appendChild(htmlElement);
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