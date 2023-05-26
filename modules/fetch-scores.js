// fetch-scores.js
import {API_BASE_URL, API_KEY } from './config.js';

const errorDiv = document.querySelector('#error-message'); // Get the error div element

const displayErrorMessage = (error) => {
  // Display the error message in the error div
  errorDiv.textContent = `Error fetching scores: ${error.message}`;
  errorDiv.style.display = 'block'; // Show the error div
};

const fetchScores = async (gameId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/games/${API_KEY}/scores/`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    displayErrorMessage(error); // Call a function to display the error message
    return [];
  }
};

export default fetchScores;
