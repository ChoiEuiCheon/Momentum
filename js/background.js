const images = ["1.jpg", "2.jpg", "3.jpg","4.jpg"];
// images 배열에 배경으로 둘 사진 이름 저장

const chosenImage = images[Math.floor(Math.random()*images.length)];
/*
    chosenImage의 변수에 랜덤값 * images배열의 길이만큼 곱한것에 
    올림하여 images배열 호출값 에 저장
*/

const bgImage = document.createElement("img");
// img tag의 HTML 요소를 만들어서 bgImage에 저장

bgImage.src = `img/${chosenImage}`;
/*
    bgImage의 src값을 "img/"chosenImage(배열 호출값에 저장된 변수)
    로 불러와 저장 
*/

document.body.appendChild(bgImage);
// bgImage를 body에 append(가장 뒤에 저장)시킨다.