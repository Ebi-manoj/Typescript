////////////////////////////////////////////////////////////////////////////
//////////HTML ELEMENTS
var taskInput = document.getElementById('task-input');
var addBtn = document.getElementById('add-btn');
var contentBox = document.querySelector('.content-items');
var tasks = [];
function generateId() {
    return Date.now();
}
function createTodo(task) {
    return {
        id: generateId(),
        task: task,
        completed: false,
    };
}
function showError() {
    taskInput.style.borderColor = 'red';
}
function saveToStorage() {
    localStorage.setItem('TASKS', JSON.stringify(tasks));
}
function loadTasks() {
    var taskArray = localStorage.getItem('TASKS');
    if (!taskArray)
        return;
    tasks = JSON.parse(taskArray);
    tasks.forEach(function (element) { return display(element); });
}
function display(task) {
    var htmlContent = "<li class=\"item\">\n          <div class=\"left\">\n            <input type=\"checkbox\" />\n            <p>".concat(task.task, "</p>\n          </div>\n          <button class=\"close-btn\">X</button>\n        </li>");
    contentBox.insertAdjacentHTML('beforeend', htmlContent);
}
//////////////////////////////////////////////////////
////FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
    addBtn.addEventListener('click', function (e) {
        taskInput.style.borderColor = '#4cb2fc';
        var task = taskInput === null || taskInput === void 0 ? void 0 : taskInput.value;
        if (task.length < 3) {
            showError();
            return;
        }
        var todo = createTodo(task);
        tasks.push(todo);
        saveToStorage();
        display(todo);
        taskInput.value = '';
    });
});
