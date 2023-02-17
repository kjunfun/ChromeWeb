const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//에러 빨리 잡아내기 위해 반복되는 쿤자열 값은 변수에 담기.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //기본 event인 새로고침 막아주기
    loginForm.classList.add(HIDDEN_CLASSNAME); //login form 숨기기
    const username = loginInput.value; //loginInput 값(문자열)을 username변수에 담아주기
    //localStorage는 데이터 CRUD가능한 브라우저가 지원하는 작은 DB API
    localStorage.setItem(USERNAME_KEY, username); //localStorage에 "username" 문자열 데이터를 username라는 키 변수를 생성하여 저장.
    //db에 데이터가 계속 쌓이지는 않는 상황인데, 계속 데이터를 입력받고 데이터가 쌓이게 구현하려면?
    paintGreetings(username); //h1 태그를 보여주는 paintGreetings함수를 호출. 매개변수는 form안에 있는 input에 입력한 유저데이터.
}

function paintGreetings(username){ 
    greeting.innerText = `Hello ${username}`; //JS 백틱 문자열 통일!
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//사용자가 입력한 문자열을 담은 지역변수 username과 localStorage에서 key에 대응하는 value값(문자열)을 담은 savedUsername과 구분하기. 
const savedUsername = localStorage.getItem(USERNAME_KEY); 

//if~else 활용해서 가독성 + 데이터 계속 저장하도록
if (savedUsername === null){ //타입과 값 모두 비교할 수 있게 === 쓰기!
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}