function addTask() {
    const taskInput = document.getElementById('taskInput');
    const tasksContainer = document.getElementById('tasksContainer');

    if (taskInput.value.trim() !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskText = document.createElement('span');
        taskText.innerText = taskInput.value;

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'X';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', function () {
            taskDiv.remove();
        });

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(removeBtn);
        tasksContainer.appendChild(taskDiv);

        // Clear the input field
        taskInput.value = '';
    }
}
