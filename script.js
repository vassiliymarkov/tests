"use strict"

let score = 0;

function checkAnswer(button) {
    const exerciseDiv = button.closest('.exercise');
    const userAnswer = exerciseDiv.querySelector('.answer').value.toLowerCase();
    const correctAnswer = exerciseDiv.getAttribute('data-answer').toLowerCase();

    const resultSpan = exerciseDiv.querySelector('.result');

    if (userAnswer === correctAnswer) {
        resultSpan.innerText = "C'est correct !";
        score++;
    } else {
        resultSpan.innerText = "Ce n'est pas correct !";
    }

    document.getElementById('score').innerText = "Очки: " + score;

    // Очистим поле ввода после проверки ответа
    exerciseDiv.querySelector('.answer').value = "";
}