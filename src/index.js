import addScore from '../modules/add-score.js';
import clearScores from '../modules/clear-scores.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const nameInput = document.querySelector('input[placeholder="Your name"]');
  const scoreInput = document.querySelector('input[placeholder="Your score"]');
  const refreshButton = document.querySelector('button[type="button"]');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    if (nameInput.value.trim() !== '' && scoreInput.value.trim() !== '') {
      addScore();
      nameInput.value = '';
      scoreInput.value = '';
    }
  });

  refreshButton.addEventListener('click', () => {
    clearScores();
  });
});