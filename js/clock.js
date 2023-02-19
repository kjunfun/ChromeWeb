const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0"); //padStart 함수는 문자열에서 사용가능.
    const secs = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${mins}:${secs}`; //``문자열 표기
}

getClock();
setInterval(getClock, 1000);