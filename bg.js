const body = document.querySelector("body"); // html의 body태그 자체를 선택해줌.

const IMG_NUMBER = 7;

function printImage(imgNumber){
    const image = new Image(); // 이미지 속성을 만들어 준것
    image.src = `/bg_images/${imgNumber +1}.jpg`  // /가져올 이미지 위치/파일명
    body.appendChild(image);
    image.classList.add("bgImage"); // bgImage라는 클래스네임을 추가해줌 
} 

//랜덤넘버 만드는 함수
function getRandomNumber(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
    // Math.random() * 숫자몇까지?
    // Math.floor는 반 내림 
    // 자바스크립트는 대소문자를 구분함. Math할때 엠은 꼭 대문자 사용 !
}

function init (){
    const randomNumber = getRandomNumber(); //랜던넘버를 만드는 함수에 이름을 지어줘서 printImage에 사용
    printImage(randomNumber)
}

init();