document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            taskItem.addEventListener("click", function(){
                taskItem.style.textDecoration = "line-through";
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Elimina";

            deleteBtn.addEventListener("click", function(){
                taskItem.remove();
                deleteBtn.remove();
            });

            taskList.appendChild(taskItem);
            taskList.appendChild(deleteBtn);
            taskInput.value = "";
        }
    });
});
