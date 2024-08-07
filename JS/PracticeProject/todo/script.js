function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") return;

    var li = document.createElement("li");
    li.textContent = taskInput.value;

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "editButton";
    editButton.onclick = function() {
        var newTask = prompt("Edit task:", li.textContent);
        if (newTask !== null) {
            li.textContent = newTask;
            li.appendChild(editButton);
            li.appendChild(deleteButton);
        }
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}
