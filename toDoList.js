const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const toDoLocal = "loadedToDos";

let toDos = [];  //deleteToDo안에서 재할당 해주기 위해 const에서 let으로 변경 
 
function deleteToDo(event){
    // const bth =    (event.target.parentNode); // 부모태그의 id를 찾기위해 console.dir로 정보 확인해보니 parentNode라는애가 가지고 있음. target을 써서 콕 찝어오기. 
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);  // 여기까지 html에서 삭제 
    const cleanToDos = toDos.filter(function(toDo){  //filter는 araay의 모든 아이템을 통해 함수를 실행 시키고, true인 아이템만 가지고 새로운 array를 만든다. 
    return toDo.id !== parseInt(li.id);  // li의 id가 삭제되면 로컬에 저장된 id의 text도 지우고 싶어서 // li.id가 스트링이라 parseInt로 숫자로 변경 
    });
    toDos = cleanToDos;  // toDos is old , cleanTodos is new. 
    toDoSave();
}

function toDoSave (text){
    localStorage.setItem(toDoLocal,JSON.stringify(toDos));  //JSON.stringify는 object > string으로 변환한다.   
}

function printToDo (text){
    const li = document.createElement("li");  
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1; // +1은 0번째값 (실제 첫번째값)의 id를 1로 만들어 주기 위함. 
    delBtn.value = "x";
    delBtn.addEventListener("click", deleteToDo); // delBtn의 클릭 이벤트 생성. 
    span.innerHTML = text;  // text는 아래 toDoHandler에서 받아온 toDoInputValue.
    li.appendChild(delBtn); //appendChile : 부모태그(li) 아래 자식태그(delBtn)를 넣어줘. 
    li.appendChild(span); //appendChile : 부모태그(li) 아래 자식태그(span)를 넣어줘. 
    li.id = newId;  // li에 id를 넣어줌. 그래야 삭제할때 어떤 li가 삭제되는지 알수 있음. 
    toDoList.appendChild(li); //appendChile : 부모태그(toDoList) 아래 자식태그(li)를 넣어줘. 이 코드가 있어야 html파일에 들어간거야. 

    const toDoObj = {
        text: text,   // key라는 text에 value라는 text가 온다는데 value는 이해 ok, but key는 어디서 text로 받음?
        id: newId
    };
    toDos.push(toDoObj); //toDos라는 빈 array에 toDoObj{}을 push
    toDoSave(); //toDoSave함수 호출 ! push전에 호출하면 아무것도 안떠. 
}
function toDoHandler (event){
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    printToDo(toDoInputValue);
    toDoInput.value = ""; // toDoInput.value가 스트링임을 알려주는 걸까?  존재의 이유를 알아내라. 
}

function loadToDo (){
    const loadedToDos = localStorage.getItem(toDoLocal);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); // JSON.parse 는 string > object로 변환 
        parsedToDos.forEach(function(toDo){  //forEach는 기본적으로 함수를 가지고 있고 array에 담겨있는 것들 각각에 함수를 실행시켜준다. (toDo는 임의로 넣어준 값) 
            printToDo(toDo.text); //toDo가 불러오는 것중 text만 출력. 
        })  
}
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", toDoHandler);
}

init();