// fetch-scores.js
import API_BASE_URL from './config.js';

const errorDiv = document.querySelector('#error-message'); // Get the error div element

function displayErrorMessage(error) {
  // Display the error message in the error div
  errorDiv.textContent = `Error fetching scores: ${error.message}`;
  errorDiv.style.display = 'block'; // Show the error div
}

async function fetchScores(gameId) {
  try {
    const response = await fetch(`${API_BASE_URL}/games/${gameId}/scores/`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    displayErrorMessage(error); // Call a function to display the error message
    return [];
  }
}

export default fetchScores;
