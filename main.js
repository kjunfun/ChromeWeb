const testVar = document.querySelector(".hello h1:nth-child(2)");

function handleTitleClick(){
    console.log("testVar was clicked");
}
function handleMousEnter(){
    testVar.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    testVar.innerText = "Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

testVar.addEventListener("click", handleTitleClick); 
testVar.onmouseenter = handleMousEnter; 
testVar.addEventListener("mouseleave", handleMouseLeave); 
window.addEventListener("resize", handleWindowResize);
