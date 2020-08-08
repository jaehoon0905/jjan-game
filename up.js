/*
Made by JAE HOON.
*/

const formDom = document.querySelector(".js-form"),
  inputDom = formDom.querySelector("input"),
  resultDom = document.querySelector(".js-result");

const CORRECT_CLASS = "correct";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function handleSubmit(event) {
  event.preventDefault();
  if (parseInt(inputDom.value) < answer) {
    resultDom.classList.remove(CORRECT_CLASS);
    resultDom.innerHTML = "UP!";
  } else if (parseInt(inputDom.value) > answer) {
    resultDom.classList.remove(CORRECT_CLASS);
    resultDom.innerHTML = "DOWN!";
  } else if (parseInt(inputDom.value) == answer) {
    resultDom.classList.add(CORRECT_CLASS);
    resultDom.innerHTML = "CORRECT!";
  }
  inputDom.value = "";
}

function init() {
  console.log(answer);
  formDom.addEventListener("submit", handleSubmit);
}

const answer = getRandomInt(1, 50);
init();
