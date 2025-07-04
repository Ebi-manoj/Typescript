"use strict";
////////////////////////////////////////////////////////////////////////////
//////////HTML ELEMENTS
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const contentBox = document.querySelector('.content-items');
let tasks = [];
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
    const taskArray = localStorage.getItem('TASKS');
    if (!taskArray)
        return;
    tasks = JSON.parse(taskArray);
    tasks.forEach((element) => display(element));
}
function display(task) {
    const htmlContent = `<li class="item">
          <div class="left">
            <input class="check-box" ${task.completed ? 'checked' : ''} type="checkbox" data-id="${task.id}" />
            <p class=${task.completed ? 'checked-task' : ''}>${task.task}</p>
          </div>
          <button class="close-btn">X</button>
        </li>`;
    contentBox.insertAdjacentHTML('beforeend', htmlContent);
}
function addTask() {
    taskInput.style.borderColor = '#4cb2fc';
    const task = taskInput?.value;
    if (task.length < 3) {
        showError();
        return;
    }
    const todo = createTodo(task);
    tasks.push(todo);
    saveToStorage();
    display(todo);
    taskInput.value = '';
}
function toggleCheckBox(e) {
    if (e.target == null)
        return;
    const target = e.target;
    if (!target.dataset.id)
        return;
    const id = Number(target.dataset.id);
    const index = tasks.findIndex(task => task.id == id);
    const task = tasks[index];
    task.completed = !task.completed;
    console.log(target);
    const item = target.closest('.item');
    const pTag = item?.querySelector('p');
    console.log(pTag);
    pTag?.classList.toggle('checked-task');
    saveToStorage();
}
//////////////////////////////////////////////////////
////INITIALIZING
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    addBtn.addEventListener('click', addTask);
    const checkBoxes = document.querySelectorAll('.check-box');
    console.log(checkBoxes);
    checkBoxes.forEach(check => check.addEventListener('click', e => toggleCheckBox(e)));
});
