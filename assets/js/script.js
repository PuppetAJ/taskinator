var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
    
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // li created with class task-item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // div created with class task-info. contains html that displays the taskNameInput
    // as well as the taskTypeInput
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class = 'task-type'>" + taskTypeInput + "</span>";
    
    // appends div taskInfoEl to the aforementioned list item ListItemEl
    listItemEl.appendChild(taskInfoEl);

    // appends list item to the UL already on the html document
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);

