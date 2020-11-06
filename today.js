const fullDate = document.querySelector(".js-date");
const clock = document.querySelector(".js-clock");

function getDateTime (){
    const today = new Date();

    const years = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();

    // 숫자로 나오는 요일을 문잘 변경해줌. 
    const options = { weekday : 'short' };  // weekday - 요일, short - Mon 짧은버전 
    const day = new Intl.DateTimeFormat('en-us', options).format(today.getDay());

    fullDate.innerHTML = `${years}년 ${month}월 ${date}일 (${day})`;

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    clock.innerHTML = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
    setInterval(getDateTime,1000);

}


function init (){
    getDateTime();
}
init();
    

// 1) 날짜  및 시간 찍어주기 2) setInterval로 시간 흐르게 해주기  3)시간에 0 포함시켜주기  4)요일 문자로 바꿔주기 
// 만드는데 2시간은 걸린듯? 
// 그 이유는,  date라는 변수를 2개 선언해줘서 날짜가 안찍혔다. 이걸로 30분 잡아먹음 / 미니조건문 넣을때 괄호나``이거 넣는 위치가 너무 헷갈렸다.
// 그래도 완성된 코드 안보고 기억과 구글링에 의존해서 만들었다. 구글링 횟수를 줄여가는게 목표! 
// 그리고 배웠던 것에서 더 나아가 날짜도 넣어봤다. 응용하고자 하는 마음 칭찬해~~! 