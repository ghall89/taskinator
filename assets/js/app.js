var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    // prevents default browser behavior for button click
    event.preventDefault();

    // get values from text field and drop down
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create a list item and give it the class of 'task-item'
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    // create div within list item and give it the class of 'task-info'
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    // writes html into the div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);