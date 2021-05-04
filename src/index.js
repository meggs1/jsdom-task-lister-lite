document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelector('#tasks') 
  const taskForm = document.querySelector('#create-task-form')
  const newTaskDescription = document.querySelector('#new-task-description')

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newLi = document.createElement('li');
    newLi.textContent = newTaskDescription.value;
    taskList.appendChild(newLi);
  });
});
