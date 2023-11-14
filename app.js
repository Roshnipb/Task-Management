// app.js
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskContainer = document.getElementById('task-container');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value;

        if (taskText.trim() !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(text) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <span>${text}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskContainer.appendChild(taskDiv);
    }
});

