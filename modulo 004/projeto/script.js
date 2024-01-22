document.addEventListener('DOMContentLoaded', function () {
    const taskContainer = document.getElementById('taskContainer');
    const newTaskInput = document.getElementById('newTaskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const clearTasksBtn = document.getElementById('clearTasksBtn');

    // Carregar tarefas do localStorage ao iniciar
    loadTasks();

    addTaskBtn.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            saveTasks();
            newTaskInput.value = '';
        }
    });

    clearTasksBtn.addEventListener('click', function () {
        clearCompletedTasks();
        saveTasks();
    });

    function addTask(text) {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <input type="checkbox">
            <p>${text}</p>
            <button class="deleteBtn">Excluir</button>
        `;

        const checkbox = task.querySelector('input');
        const deleteBtn = task.querySelector('.deleteBtn');

        checkbox.addEventListener('change', function () {
            task.classList.toggle('completed', checkbox.checked);
            saveTasks();
        });

        deleteBtn.addEventListener('click', function () {
            task.remove();
            saveTasks();
        });

        taskContainer.appendChild(task);
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('.task.completed');
        completedTasks.forEach(task => task.remove());
    }

    function saveTasks() {
        const tasks = [];
        const taskElements = document.querySelectorAll('.task');
        taskElements.forEach(task => {
            const text = task.querySelector('p').innerText;
            const completed = task.classList.contains('completed');
            tasks.push({ text, completed });
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);
            tasks.forEach(task => addTaskFromStorage(task));
        }
    }

    function addTaskFromStorage(task) {
        addTask(task.text);
        const lastTask = taskContainer.lastElementChild;
        const checkbox = lastTask.querySelector('input');
        checkbox.checked = task.completed;
        lastTask.classList.toggle('completed', task.completed);
    }
});
