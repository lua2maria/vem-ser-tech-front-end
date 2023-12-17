class Category {
    constructor(title, img) {
        this.title = title;
        this.img = img;
    }
}

class Task {
    constructor(id, task, category, completed) {
        this.id = id;
        this.task = task;
        this.category = category;
        this.completed = completed;
    }
}

let categories = [
    new Category("Personal", "boy.png"),
    new Category("Work", "briefcase.png"),
    new Category("Shopping", "shopping.png"),
    new Category("Coding", "web-design.png"),
    new Category("Health", "healthcare.png"),
    new Category("Fitness", "dumbbell.png"),
    new Category("Education", "education.png"),
    new Category("Finance", "saving.png"),
];

let tasks = [
    new Task(1, "Go to market", "Shopping", false),
    new Task(2, "Read a chapter of a book", "Personal", false),
    new Task(3, "Prepare presentation for meeting", "Work", false),
    new Task(4, "Complete coding challenge", "Coding", false),
    new Task(5, "Take a 30-minute walk", "Health", false),
    new Task(6, "Do a 20-minute HIIT workout", "Fitness", false),
    new Task(7, "Watch an educational video online", "Education", false),
    new Task(8, "Review monthly budget", "Finance", false),
    new Task(9, "Buy groceries for the week", "Shopping", false),
    new Task(10, "Write in a journal", "Personal", false),
    new Task(11, "Send follow-up emails", "Work", false),
    new Task(12, "Work on a coding side project", "Coding", false),
    new Task(13, "Try a new healthy recipe", "Health", false),
    new Task(14, "Attend a yoga class", "Fitness", false),
    new Task(15, "Read an article about a new topic", "Education", false),
    new Task(16, "Set up automatic bill payments", "Finance", false),
    new Task(17, "Buy new clothes", "Shopping", false),
    new Task(18, "Meditate for 10 minutes", "Personal", false),
    new Task(19, "Prepare agenda for team meeting", "Work", false),
    new Task(20, "Debug a software issue", "Coding", false),
    new Task(21, "Try a new recipe for lunch", "Health", false),
    new Task(22, "Go for a run", "Fitness", false),
    new Task(23, "Learn a new language online", "Education", false),
    new Task(24, "Read about history", "Education", false),
    new Task(25, "Review investment portfolio", "Finance", false),
];

// Define functions
const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getLocal = () => {
    const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
    if (tasksLocal) {
        tasks = tasksLocal;
    }
};

const toggleScreen = () => {
    screenWrapper.classList.toggle("show-category");
};

const updateTotals = () => {
    const categoryTasks = tasks.filter(
        (task) =>
            task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    numTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
};

const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
        const categoryTasks = tasks.filter(
            (task) => task.category.toLowerCase() === category.title.toLowerCase()
        );
        const div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", () => {
            screenWrapper.classList.toggle("show-category");
            selectedCategory = category;
            updateTotals();
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `images/${category.img}`;
            renderTasks();
        });

        div.innerHTML = `
                    <div class="left">
                  <img src="images/${category.img}"
                   alt="${category.title}"
                    />
                  <div class="content">
                    <h1>${category.title}</h1>
                    <p>${categoryTasks.length} Tasks</p>
                  </div>
                </div>
                <div class="options">
                  <div class="toggle-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </div>
                </div>
      `;

        categoriesContainer.appendChild(div);
    });
};

const renderTasks = () => {
    tasksContainer.innerHTML = "";
    const categoryTasks = tasks.filter(
        (task) =>
            task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    if (categoryTasks.length === 0) {
        tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
    } else {
        categoryTasks.forEach((task) => {
            const div = document.createElement("div");
            div.classList.add("task-wrapper");
            const label = document.createElement("label");
            label.classList.add("task");
            label.setAttribute("for", task.id);
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = task.id;
            checkbox.checked = task.completed;
            checkbox.addEventListener("change", () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                tasks[index].completed = !tasks[index].completed;
                saveLocal();
            });
            div.innerHTML = `
        <div class="delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                `;
            label.innerHTML = `
                <span class="checkmark"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p>${task.task}</p>
          `;
            label.prepend(checkbox);
            div.prepend(label);
            tasksContainer.appendChild(div);

            const deleteBtn = div.querySelector(".delete");
            deleteBtn.addEventListener("click", () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                tasks.splice(index, 1);
                saveLocal();
                renderTasks();
            });
        });

        renderCategories();
        updateTotals();
    }
};

const toggleAddTaskForm = () => {
    addTaskWrapper.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
};

const addTask = (e) => {
    e.preventDefault();
    const task = taskInput.value;
    const category = categorySelect.value;

    if (task === "") {
        alert("Please enter a task");
    } else {
        const newTask = new Task(tasks.length + 1, task, category, false);
        taskInput.value = "";
        tasks.push(newTask);
        saveLocal();
        toggleAddTaskForm();
        renderTasks();
    }
};


let selectedCategory = categories[0];
const categoriesContainer = document.querySelector(".categories");
const screenWrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");
const tasksContainer = document.querySelector(".tasks");
const numTasks = document.getElementById("num-tasks");
const categoryTitle = document.getElementById("category-title");
const categoryImg = document.getElementById("category-img");
const categorySelect = document.getElementById("category-select");
const addTaskWrapper = document.querySelector(".add-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskInput = document.getElementById("task-input");
const blackBackdrop = document.querySelector(".black-backdrop");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const totalTasks = document.getElementById("total-tasks");


menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);
addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);
addBtn.addEventListener("click", addTask);
cancelBtn.addEventListener("click", toggleAddTaskForm);


getLocal();
renderTasks();
categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
});

getLocal();
renderCategories();
renderTasks();
