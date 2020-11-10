const greetingForm = document.querySelector(".js-greetingForm"),
      input = greetingForm.querySelector("input")  // 폼 위치 
const greeting = document.querySelector(".js-greeting") // 이름 찍을 곳 

const userName = "name"; // (2)에서 사용하려고 만듬
const showingForm = "showing" //얘는 css파일에만 존재하는애, 근데 왜 .쇼잉이 아닌지 모르겠다!


//(6) 로컬 스토리지에 이름 저장하는 함수 
function saveName(text){
    localStorage.setItem(userName, text);
}
//(5)
function submitHandler(event){
    event.preventDefault(); // submit이 새로고침 되지 않도록 
    const inputValue = input.value;  // input의 value를 inputValue라른 이름으로 선언해주고 
    printName(inputValue);  // printName할때 inputValue해서 반환해줘 
    saveName(inputValue);
}

//(4)이름을 출력해라 함수 
function printName(text){
    greetingForm.classList.remove(showingForm);//element.classList.remove("class명"); 클래스 삭제  
    greeting.classList.add(showingForm);
    greeting.innerText = `Hi ${text}`; //텍스트를 찍어라 
}

//(3)이름을 내놓아라 함수 
function askName (){
    greetingForm.classList.add(showingForm);// 폼을 그대로 보여줌 - 코드 입력 안함 
    greetingForm.addEventListener("submit", submitHandler);//폼을 제출하는 이벤트 생성 
}


//(2) 로컬스토리지에 이름 값이 있어 없어? 함수 
function loadName (){
    const name = localStorage.getItem(userName); 
    if (name === null){  //로컬스토리지에서 가져온 값이 null 이야?(없어?)
        askName(); //(3)이름을 내놓아라 함수 
    } else{
        printName(name); //(4)이름을 출력해라 함수 
    }
}

//(1) 최종 실행 함수 
function init(){
    loadName();  // 위 모든 함수를 실행하는 첫 함수 
}
init();

//1) 텍스트 입력할 수 있는 창 생성  2) 입력창에 값이 있는지 없는지?   3) 있으면 폼 없애고 값 찍기    4) 없으면, 창 그대로 보여주기  5) 폼서밋하면 이벤트가 새로고침되지 않도록 막고, 보여주고 저장하기
// 오류 났던 이유, (2) else 부분에서 printName()안에 name을 안넣어 줬더니 새로고침하고나면 이름부분이 undifined가 떴다. askName에는 파라미터가 안필요한데, printName에는 필요한 이유가 뭐지??