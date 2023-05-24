function addScore() {
  const nameInput = document.querySelector('input[placeholder="Your name"]');
  const scoreInput = document.querySelector('input[placeholder="Your score"]');
  const scoresList = document.querySelector('.list-group');

  if (nameInput.value.trim() === '' || scoreInput.value.trim() === '') {
    return; // Exit the function if the fields are empty
  }

  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item', 'border-dark');

  // Get the count of existing list items
  const existingCount = scoresList.querySelectorAll('.list-group-item').length;

  if (existingCount % 2 === 1) {
    listItem.classList.add('list-group-item-dark');
  }

  listItem.textContent = `${nameInput.value}: ${scoreInput.value}`;
  scoresList.appendChild(listItem);

  nameInput.value = ''; // Clear the name input field
  scoreInput.value = ''; // Clear the score input field
}

export default addScore;
