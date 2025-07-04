////////////////////////////////////////////////////////////////////////////
//////////HTML ELEMENTS

const taskInput = document.getElementById('task-input') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const contentBox = document.querySelector('.content-items') as HTMLUListElement;
let checkBoxes = document.querySelectorAll(
  '.check-box'
) as NodeListOf<HTMLInputElement>;

let closeBtn = document.querySelectorAll(
  '.close-btn'
) as NodeListOf<HTMLInputElement>;
//////////////////////////////////////////////////
////Utitlites
type Todo = {
  id: number;
  task: string;
  completed: boolean;
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

function loadBtn() {
  checkBoxes = document.querySelectorAll(
    '.check-box'
  ) as NodeListOf<HTMLInputElement>;

  closeBtn = document.querySelectorAll(
    '.close-btn'
  ) as NodeListOf<HTMLInputElement>;
  checkBoxes.forEach(check =>
    check.addEventListener('click', e => toggleCheckBox(e))
  );
  closeBtn.forEach(check =>
    check.addEventListener('click', e => deleteTask(e))
  );
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
            <input class="check-box" ${
              task.completed ? 'checked' : ''
            } type="checkbox" data-id="${task.id}" />
            <p class=${task.completed ? 'checked-task' : ''}>${task.task}</p>
          </div>
          <button data-id="${task.id}" class="close-btn">X</button>
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
  loadBtn();
  taskInput.value = '';
}
function toggleCheckBox(e: MouseEvent) {
  if (e.target == null) return;
  const target = e.target as HTMLElement;
  if (!target.dataset.id) return;
  const id: number = Number(target.dataset.id);
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
function deleteTask(e: MouseEvent) {
  const target = e.target as HTMLElement;
  const id: number = Number(target.dataset.id);
  console.log(id);

  const item = target.closest('.item');
  item?.remove();
  tasks = tasks.filter(t => t.id !== id);
  saveToStorage();
}
//////////////////////////////////////////////////////
////INITIALIZING

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  loadBtn();
  addBtn.addEventListener('click', addTask);
});
