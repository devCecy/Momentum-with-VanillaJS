const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("js-toDoList");

const toDoLocal = "toDoKey"

function toDoSave (text){
    localStorage.setItem(toDoLocal, text);
}

function toDoHandler (event){
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    printToDo(toDoInputValue);
    toDoSave(toDoInputValue);
}

function printToDo (text){
    toDoForm.addEventListener("submit", toDoHandler);
    toDoInput.innerText = `${text}`;
}

function loadToDo (){
    const toDoKey = localStorage.getItem(toDoLocal);
    if (toDoKey !== null){
        printToDo(toDoKey);
    }
} 

function init(){
    loadToDo();
}

init();

