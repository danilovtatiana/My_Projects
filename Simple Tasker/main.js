const submitButton = document.getElementById("submit_button");
const tasks = document.getElementById('tasks');
submitButton.addEventListener('click', addTask);


function addTask(){
  const newTask = document.getElementById('newTask');
  if (inputIsValid(newTask.value)) {
    tasks.innerHTML += '<li class = "list-group">' + newTask.value + '</li>';
    newTask.value = "";
  }

function inputIsValid(input) {
  if (input) {
    return true;
  }
    return false;
  }
