'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When player has not entered the number.
  if (!guess) {
    displayMessage(` ❌ No Number !`);
    //When player wins
  } else if (guess == secretNumber) {
    displayMessage('💥 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
    //When the guess is high
  } else if (guess != secretNumber) {
    if (score) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🫣 You lost the game!');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing');
  document.querySelector('body').style.backgroundColor = '#27335f';
  document.querySelector('.number').style.width = '15rem';
});
