const testVar = document.querySelector("div.hello h1:nth-child(1)");

function handleTitleClick(){
    testVar.classList.toggle("clicked");
//toggle은 testVar의 classList에 "clicked"가 있다면, toggle은 "clicked"를 제거해주고, 없다면 "clicked"를 추가해준다.
}

testVar.addEventListener("click", handleTitleClick); 
