function solve(input) {
    let data = [...input];
    let integer = Number(data.shift());
    let elements = data.splice(0, integer);
    let tasks = {}; let points = {'ToDo': 0, 'In Progress': 0, 'Code Review': 0, 'Done': 0};
    for (let element of elements) {
        let details = element.split(':');
        let [assignee, taskId, title, status, points] = details;
        if (!tasks.hasOwnProperty(assignee)) {
            tasks[assignee] = [];
        }
        tasks[assignee].push({'taskId': taskId, 'title': title, 'status': status, 'points': points});
    }
    for (let line of data) {
        line = line.split(':');
        let command = line.shift(); let assignee = line.shift();
        if (command === 'Add New') {
            let [taskId, title, status, points] = line;
            if (assigneeExists(assignee)) {
                tasks[assignee].push({'taskId': taskId, 'title': title, 'status': status, 'points': points});
            }
        }
        else if (command === 'Change Status') {
            let [taskId, newStatus] = line;
            if (assigneeExists(assignee)) {
                let taskDoesNotExists = true;
                for (let task of tasks[assignee]) {
                    if (task['taskId'] === taskId) {
                        task['status'] = newStatus;
                        taskDoesNotExists = false;
                    }
                }
                if (taskDoesNotExists) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                }
            }
        }
        else {
            let index = Number(line[0]);
            if (assigneeExists(assignee)) {
                0 <= index && index < tasks[assignee].length ? tasks[assignee].splice(index, 1): console.log('Index is out of range!');
            }
        }
    }
    for (let assignee in tasks) {
        for (let task of tasks[assignee]) {
            points[task['status']] += Number(task['points']);
        }
    }
    let otherPoints = 0; let donePoints = 0;
    for (let task in points) {
        if (task === 'Done') {
            donePoints += points[task];
            console.log(`Done Points: ${points[task]}pts`)
        }
        else {
            otherPoints += points[task];
            console.log(`${task}: ${points[task]}pts`);
        }
    }
    donePoints >= otherPoints ? console.log('Sprint was successful!') : console.log('Sprint was unsuccessful...')
    function assigneeExists(assignee) {
        return tasks.hasOwnProperty(assignee) ? true : console.log(`Assignee ${assignee} does not exist on the board!`);
    }
}