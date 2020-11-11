const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
       latitude, //latitude: latitude,  //객채의 변수이름과 키 이름이 같게 저장할때는 옆과 같이 단축 할 수 있다. 
       longitude//longitude:longitude     
    };
    saveCoords(coordsObj);
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
        //get weahter
    }
}

function init(){
    loadCoords();
}
init();