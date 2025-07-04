////////////////////////////////////////////////////////////////////////////
//////////HTML ELEMENTS

const taskInput = document.getElementById('task-input') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const contentBox = document.querySelector('.content-items') as HTMLUListElement;

//////////////////////////////////////////////////
////Utitlites
type Todo = {
  id: number;
  task: string;
  completed: false;
};

let tasks: Todo[] = [];

function generateId(): number {
  return Date.now();
}

function createTodo(task: string): Todo {
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
  if (!taskArray) return;
  tasks = JSON.parse(taskArray);
  tasks.forEach((element: Todo) => display(element));
}

function display(task: Todo) {
  const htmlContent = `<li class="item">
          <div class="left">
            <input type="checkbox" />
            <p>${task.task}</p>
          </div>
          <button class="close-btn">X</button>
        </li>`;
  contentBox.insertAdjacentHTML('beforeend', htmlContent);
}
//////////////////////////////////////////////////////
////FUNCTIONALITY

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  addBtn.addEventListener('click', function (e) {
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
  });
});
