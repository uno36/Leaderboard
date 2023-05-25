/* eslint-disable prefer-destructuring */
// main.js
import './styles.css';
import EventEmitter from '../modules/event-class.js';
import fetchScores from '../modules/fetch-scores.js';
import submitScore from '../modules/submit-score.js';
import API_BASE_URL from '../modules/config.js';

const eventEmitter = new EventEmitter();

document.addEventListener('DOMContentLoaded', async () => {
  const gameName = 'puuzzlex'; // Replace with your desired game name
  let gameId = '';

  const createNewGame = async (name) => {
    try {
      const response = await fetch(`${API_BASE_URL}/games/${gameId}/scores/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
      });
      const data = await response.json();
      gameId = data.result.split(' ')[3];
    } catch (error) {
      eventEmitter.emit('fetchError', error); // Emit the 'fetchError' event with the error
    }
  };

  await createNewGame(gameName);

  const refreshScores = async () => {
    const scoresList = document.querySelector('.list-group');
    scoresList.innerHTML = '';

    try {
      const scores = await fetchScores(gameId);
      scores.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'border-dark');
        listItem.style.border = '1px solid black';
        listItem.style.listStyleType = 'none';
        listItem.style.padding = '10px';
        listItem.style.width = '90%';

        if (index % 2 === 1) {
          listItem.style.background = 'dimgray';
        }

        listItem.textContent = `${score.user}: ${score.score}`;
        scoresList.appendChild(listItem);
      });
    } catch (error) {
      eventEmitter.emit('fetchError', error); // Emit the 'fetchError' event with the error
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('input#name');
    const scoreInput = document.querySelector('input#score');

    const userName = nameInput.value.trim();
    const score = parseInt(scoreInput.value.trim(), 10);

    if (userName !== '' && !Number.isNaN(score)) {
      try {
        await submitScore(gameId, userName, score);
        nameInput.value = '';
        scoreInput.value = '';
        refreshScores();
      } catch (error) {
        eventEmitter.emit('fetchError', error); // Emit the 'fetchError' event with the error
      }
    }
  };

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);

  const refreshButton = document.querySelector('.refresh');
  refreshButton.addEventListener('click', refreshScores);

  refreshScores();
});
