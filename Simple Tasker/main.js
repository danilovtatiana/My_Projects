const submitButton = document.getElementById("submit_button");
const tasks = document.getElementById('tasks');
const messageElement = document.getElementById('message');
submitButton.addEventListener('click', addTask);

function displayMessage(message){
  messageElement.innerText = message;
  messageElement.style.visibility = "visible";
}

displayMessage("Good, you have no tasks today!");

function addTask(){
  const newTask = document.getElementById('newTask');
  if (inputIsValid(newTask.value)) {
    tasks.innerHTML += '<li class = "list-group">' + newTask.value + '</li>';
    newTask.value = "";
    messageElement.style.visibility = "hidden";
  }else {
    displayMessage("Please provide non empty input!")
  }

function inputIsValid(input){
  if(input){
    return true;
  }
  return false;
}
}
