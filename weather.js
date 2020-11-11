const weather = document.querySelector(".js-weather");
const API_KRY = "4177782532afcd4eb994a9c987bd97d7";
const COORDS = "coords";

function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KRY}&units=metric`
    ) // fetch를 통해 데이터를 가져 올 수 있다. 앞부분에 https://넣어줄것 //&units=metric 을 넣어 단위 맞춰줌!
        .then(function(response){ // then은 데이터가 완전히 들어온 다음에 호출한다. 
            return response.json();
        }) 
        .then (function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @${place}`// html에 넣어주기 
        });

        function saveCoords(coordsObj){
            localStorage.setItem(COORDS, JSON.stringify(coordsObj));
        }
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
       latitude, //latitude: latitude,  //객채의 변수이름과 키 이름이 같게 저장할때는 옆과 같이 단축 할 수 있다. 
       longitude//longitude:longitude     
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError) // getCurrentPosition은 2개의 requirment가 있음, success & error
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();