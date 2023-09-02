function solve() {
    const idField = document.getElementById('task-id');
    const titleField = document.getElementById('title');
    const descriptionField = document.getElementById('description');
    const labelField = document.getElementById('label');
    const pointsField = document.getElementById('points');
    const assigneeField = document.getElementById('assignee');
    const createTaskBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    const totalPointsField = document.getElementById('total-sprint-points');
    const tasksContainer = document.querySelector('#tasks-section');
    const inputs = [titleField, descriptionField, labelField, pointsField, assigneeField];

    let icons = {'Feature': ['&#8865', 'feature'], 'Low Priority Bug': ['&#9737', 'low-priority'], 'High Priority Bug': ['&#9888', 'high-priority']};
    let taskId = 0; let totalPoints = 0;

    createTaskBtn.addEventListener('click', addTaskHandler);
    deleteTaskBtn.addEventListener('click', removeTaskHandler);

    function addTaskHandler(event) {
        event.preventDefault(); taskId += 1; idField.value = `task-${taskId}`;
        let fields = [idField.value, titleField.value, descriptionField.value, labelField.value, pointsField.value, assigneeField.value];
        if (fields.includes('')) {
            taskId -= 1;
            return;
        }
        let [id, title, description, label, points, assignee] = fields;
        totalPoints += Number(points);
        totalPointsField.textContent = `Total Points ${totalPoints}pts`
        let article = htmlCreator('article', tasksContainer, '', ['task-card'], id);
        htmlCreator('div', article, '', ['task-card-label', `${icons[label][1]}`], '', `${label} ${icons[label][0]}`);
        htmlCreator('h3', article, title, ['task-card-title']);
        htmlCreator('p', article, description, ['task-card-description']);
        htmlCreator('div', article, `Estimated at ${Number(points)} pts`, ['task-card-points']);
        htmlCreator('div', article, `Assigned to: ${assignee}`, ['task-card-assignee']);
        let divAction = htmlCreator('div', article, '', ['task-card-actions']);
        let deleteBtn = htmlCreator('button', divAction, 'Delete');
        idField.value = ''; inputs.map((input) => input.value = '');
        deleteBtn.addEventListener('click', reloadFormHandler);
    }
    function reloadFormHandler() {
        let parentArticle = this.parentNode.parentNode;
        let elements = Array.from(parentArticle.children);
        idField.value = parentArticle.id;
        let labelIcon = elements[0].innerHTML;
        labelField.value = labelIcon.substring(0, labelIcon.length - 2);
        titleField.value = elements[1].textContent;
        descriptionField.value = elements[2].textContent;
        pointsField.value = elements[3].textContent.split(' ')[2];
        assigneeField.value = elements[4].textContent.split(': ')[1];
        totalPoints -= Number(elements[3].textContent.split(' ')[2]);
        totalPointsField.textContent = `Total Points ${totalPoints}pts`;
        parentArticle.remove();
        createTaskBtn.disabled = true;
        deleteTaskBtn.disabled = false;
        inputs.map((input) => input.disabled = true);
    }
    function removeTaskHandler() {
        idField.value = ''; titleField.value = ''; descriptionField.value = '';
        labelField.value = ''; pointsField.value = ''; assigneeField.value = '';
        createTaskBtn.disabled = false; deleteTaskBtn.disabled = true;
        inputs.map((input) => input.disabled = false);
    }
    function htmlCreator(type, parentNode, textContent, classes, id, innerHTML) {
        let htmlElement = document.createElement(type);
        parentNode.appendChild(htmlElement);
        if (textContent) {
            htmlElement.textContent = textContent;
        }
        if (classes) {
            htmlElement.classList.add(...classes);
        }
        if (id) {
            htmlElement.id = id;
        }
        if (innerHTML) {
            htmlElement.innerHTML = innerHTML;
        }
        return htmlElement;
    }
}