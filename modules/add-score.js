function clearScores() {
    const scoresList = document.getElementById('scores');
    scoresList.innerHTML = ''; // Clear the list by removing all its child elements
  }
  
  export { clearScores };