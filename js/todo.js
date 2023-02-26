const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; //값을 두번 이상 쓴다? 바로 변수만들기! -> 실수방지, 중복제거!
let toDos = []; //let으로 변경 -> todo 리스트들을 저장한 배열은 사용자의 입력에 따라 유동적으로 변하니깐!

function saveToDos() { //5
    //입력한 todo(newTodo)들을 localStorage에 저장하고, 그 후에 새로고침 하면 localStorage에서 저장한 todo들을 불러와서 화면에 그려준다.(paintToDo) 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //Json.stringify()는 Js object나 array등을 string으로 변환해줌.
    //Json.parse()를 해주면 문자열을 array나 object로 만들어줄 수 있다.
}
function deleteToDo(event) { //4
    //event가 클릭된 위치를 알려준다.
    const li = event.target.parentElement; //여기서 console.log(event.target.parentElement.innerText)까지 찍어주면 console에 삭제된 todo의 내용까지 보여줄 수 있다.
    alert(`Wow ${localStorage.getItem(USERNAME_KEY)} did ${li.innerText}! Great!`);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //화살표 함수 사용, filter는 python 람다 표현식과 유사, parseInt("문자열"):문자열을 숫자로 변환
    saveToDos();
}
function paintToDo(newTodo) { //3
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.innerText = newTodo.text; 
    const button = document.createElement("button");
    button.innerText = "😆"; //이모지 복사
    button.addEventListener("click", deleteToDo); 
    li.appendChild(button); 
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) { //2
    event.preventDefault();
    const newTodo = toDoInput.value; //사용자가 입력한 Todo 내용
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now() //todo 항목들에 id 지정해서 관리
    };
    toDos.push(newTodoObj); //toDos배열에 newTodo 추가.
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit); //1
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) { //savedToDos가 localStorage에 존재(!==null)하면 아래의 코드들을 실행.
    const parsedToDos = JSON.parse(savedToDos); //toDos array를 갖고와서 toDos array에 복원함.
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo); //각각 painToDo(item)들을 화면에 그려주기에 새로고침해도 계속 표시.
    //forEach함수는 paintToDo를 parsedToDos 배열의 요소마다 실행한다.
}