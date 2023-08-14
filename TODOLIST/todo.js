const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";

    
    const deleteButton = taskItem.querySelector(".deleteButton");
    deleteButton.addEventListener("click", function () {
        taskItem.remove();
    });
}


addButton.addEventListener("click", addTask);


taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
