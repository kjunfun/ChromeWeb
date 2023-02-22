const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)]; //내림해서 랜덤 인덱스 0,1,2로 접근
const bgImage = document.createElement("img"); //해당 element 생성 후 변수에 저장
const errormessage = "이미지 에러!";
bgImage.src = `images/${chosenImage}`;
bgImage.alt = errormessage;
document.body.appendChild(bgImage); //body가장 끝 부분에 bgImage html 태그 추가