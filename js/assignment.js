"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3;

    if (num % 2 === 0) {
        evenOrOddElement.innerText = "Even";

    } else {
        evenOrOddElement.innerText = "Odd";
    }
    

}

function sumTheNumbers() {
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    sumTheNumbersElement.innerText= sum;
    

}

function createNumberArray() {
    const numberArray = [];

    for (let i = 1; i <= 10; i++) {
        numberArray.push(i);
    }
    createNumberArrayElement.innerText = numberArray.join(", ");

}

function render() {
    // Call the created functions
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();

}

submissionBtn.addEventListener("click", function () {
    render();
});
