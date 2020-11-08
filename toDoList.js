const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const toDoLocal = "toDoKey";
const toDoArr = [];

function toDoSave (text){
    localStorage.setItem(toDoLocal, JSON.stringify(toDoArr));
}

function printToDo (text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = `${text}`;
    li.appendChild(span);
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    
}

function toDoHandler (event){
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    printToDo(toDoInputValue);
}

function loadToDo (){
    const toDoKey = localStorage.getItem(toDoLocal);
    if (toDoKey !== null){
        const parsedToDos = JSON.parse(toDoKey);
        parsedToDos.forEach(function(toDo){
        printToDo(toDo.text);
    });
}
} 

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", toDoHandler);
}

init();

