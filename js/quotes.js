const quotes = [
    {
        quote : "1",
        author : "1"
    },
    {
        quote : "2",
        author : "2"
    },
    {
        quote : "3",
        author : "3"
    },
    {
        quote : "4",
        author : "4"
    },
    {
        quote : "5",
        author : "5"
    },
    {
        quote : "6",
        author : "6"
    },
    {
        quote : "7",
        author : "7"
    },
    {
        quote : "8",
        author : "8"
    },
    {
        quote : "9",
        author : "9"
    },
    {
        quote : "10",
        author : "10"
    }
]; // 명언을 저장하는 ArrayList

const quote = document.querySelector("#quote span:first-child");
//html안의 div quote안의 first-child(첫번째) span을 호출하고 quote변수에 저장
const author = document.querySelector("#quote span:last-child");
//html안의 div quote안의 second-child(두번째) span을 호출하고 quote변수에 저장

const todaysQuote = quotes[Math.round(Math.random()*quotes.length)];
// todaysQuote 변수 안에 ArrayList quotes 저장
// Math.random = 0부터 1사이의 랜덤한 실수(float) 제공(ex : 0.12434255..)
// Math.round = 인수를 반올림
// Math.floor = 인수를 내림
// Math.ceil = 인수를 올림
/* 
Math.random으로 받은 랜덤 실수에 quotes Array의 길이만큼 곱한 값을
반올림하여 나온 인수로 배열의 순서 지목
*/

quote.innerText = todaysQuote.quote;
// quote(span:first-child)에 todaysQuote에 저장된 quote 출력
author.innerText = todaysQuote.author;
// author(span:second-child)에 todaysQuote에 저장된 author 출력