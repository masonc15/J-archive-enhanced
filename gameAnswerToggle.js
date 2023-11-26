// Wait for the window to load before executing the script
window.onload = function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) {
    console.error('Navbar element not found');
    return;
  }

  const button = document.createElement('button');
  button.id = 'toggleAnswersBtn';
  button.textContent = 'Show/Hide all answers';

  // Ensure the button is appended to a visible container
  navbar.appendChild(button);

  button.addEventListener('click', function () {
    const correctResponses = document.querySelectorAll('.correct_response');
    correctResponses.forEach(function (correctResponse) {
      const clueTextTd = correctResponse.closest('tr').querySelector('.clue_text');
      if (clueTextTd) {
        // Check if the answer is already appended
        if (clueTextTd.querySelector('.answer-text')) {
          // Remove the answer and the breaks
          const answerElement = clueTextTd.querySelector('.answer-text');
          const breakElements = clueTextTd.querySelectorAll('.answer-break');
          breakElements.forEach(br => clueTextTd.removeChild(br));
          clueTextTd.removeChild(answerElement);
        } else {
          // Append the answer with two line breaks
          for (let i = 0; i < 2; i++) {
            const breakElement = document.createElement('br');
            breakElement.className = 'answer-break';
            clueTextTd.appendChild(breakElement);
          }
          const answerElement = document.createElement('span');
          answerElement.textContent = correctResponse.textContent;
          answerElement.className = 'answer-text';
          answerElement.style.color = '#00FFFF';
          clueTextTd.appendChild(answerElement);
        }
      }
    });
  });
}
