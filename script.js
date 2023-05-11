let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('task-list');

function addTask() {
  if (taskInput.value === '') {
    alert('Please enter a task');
  } else {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li);
    taskInput.value = '';
  }
}
