let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function fetchTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();
    if (newTask === '') {
        alert('Please Enter a New Task');
        return;
    }

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    fetchTasks();
}

fetchTasks();