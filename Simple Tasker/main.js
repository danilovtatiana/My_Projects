const submitButton = document.getElementById("submit_button");
const tasks = document.getElementById('tasks');
submitButton.addEventListener('click', addTask);


function addTask(){
  const newTask = document.getElementById('newTask');
  tasks.innerHTML += '<li class = "list-group">' + newTask.value + '</li>';
}
