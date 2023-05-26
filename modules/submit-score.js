// submit-score.js
import { API_BASE_URL, API_KEY } from './config.js';

const handleSubmissionError = (error) => {
  // Perform custom error handling, e.g., display an error message on the webpage
  const errorMessage = document.querySelector('#submission-error');
  errorMessage.textContent = `Error submitting score: ${error.message}`;
  errorMessage.style.display = 'block'; // Show the error message
};

const submitScore = async (gameId, userName, score) => {
  try {
    const response = await fetch(`${API_BASE_URL}/games/${API_KEY}/scores/`, {
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
    handleSubmissionError(error); 
    return null;
  }
};

export default submitScore;
