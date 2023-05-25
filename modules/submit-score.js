// submit-score.js
import API_BASE_URL from './config.js';

function handleSubmissionError(error) {
  // Perform custom error handling, e.g., display an error message on the webpage
  const errorMessage = document.querySelector('#submission-error');
  errorMessage.textContent = `Error submitting score: ${error.message}`;
  errorMessage.style.display = 'block'; // Show the error message
}

async function submitScore(gameId, userName, score) {
  try {
    const response = await fetch(`${API_BASE_URL}/games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: userName,
        score,
      }),
    });
    const data = await response.json();
    return data.result;
  } catch (error) {
    handleSubmissionError(error); // Call a custom error handling function
    return null;
  }
}

export default submitScore;
