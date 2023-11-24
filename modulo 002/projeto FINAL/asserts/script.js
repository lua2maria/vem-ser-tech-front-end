class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(id, title, description) {
        const task = { id, title, description, completed: false };
        this.tasks.push(task);
        return task;
    }

    editTask(id, title, description) {
        const taskIndex = this.findTaskIndex(id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].title = title;
            this.tasks[taskIndex].description = description;
            return this.tasks[taskIndex];
        }
        return null;
    }

    removeTask(id) {
        const taskIndex = this.findTaskIndex(id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }

    getTask(id) {
        const taskIndex = this.findTaskIndex(id);
        return taskIndex !== -1 ? this.tasks[taskIndex] : null;
    }

    listTasks() {
        return this.tasks;
    }

    findTaskIndex(id) {
        return this.tasks.findIndex(task => task.id === id);
    }

    validateTask(title, description) {
        if (!title || !description) {
            throw new Error('Título e descrição não podem estar vazios.');
        }

        if (!isNaN(title)) {
            throw new Error('O título não pode conter apenas números.');
        }

        if (title.length < 4) {
            throw new Error('O título deve ter pelo menos 4 caracteres.');
        }

        if (description.length < 20) {
            throw new Error('A descrição deve ter pelo menos 20 caracteres.');
        }

        if (this.tasks.some(task => task.title === title)) {
            throw new Error('Não pode haver tarefas com títulos duplicados.');
        }
    }
}

const toDoList = new ToDoList();

document.getElementById('add-task-button').addEventListener('click', () => {
    try {
        const id = document.getElementById('id').value;
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        toDoList.validateTask(title, description);

        const task = toDoList.addTask(Number(id), title, description);
        displayTasks();
    } catch (error) {
        document.getElementById('result').textContent = error.message;
    }
});

document.getElementById('search-button').addEventListener('click', () => {
    const searchId = Number(document.getElementById('search-id').value);
    const task = toDoList.getTask(searchId);

    if (task) {
        alert(`Tarefa Encontrada:\nID: ${task.id}\nTítulo: ${task.title}\nDescrição: ${task.description}`);
    } else {
        alert('Tarefa não encontrada.');
    }
});

function displayTasks() {
    const tasksContainer = document.getElementById('tasks-container');
    tasksContainer.innerHTML = '';

    toDoList.listTasks().forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const textElement = document.createElement('span');
        textElement.textContent = `ID: ${task.id} - ${task.title} - ${task.description}`;

        if (task.completed) {
            textElement.classList.add('completed-task');
        }

        const deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', () => {
            toDoList.removeTask(task.id);
            displayTasks();
        });

        const completeButton = document.createElement('span');
        completeButton.classList.add('complete-button');
        completeButton.textContent = '✅';
        completeButton.addEventListener('click', () => {
            task.completed = !task.completed;
            displayTasks();
        });

        taskElement.appendChild(textElement);
        taskElement.appendChild(deleteButton);
        taskElement.appendChild(completeButton);

        tasksContainer.appendChild(taskElement);
    });
}

document.getElementById('result').textContent = '';
displayTasks();
 
