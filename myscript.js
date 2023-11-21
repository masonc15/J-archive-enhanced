document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  if (!navbar) {
    console.error('Navbar element not found');
    return;
  }

  const button = document.createElement('button');
  button.id = 'toggleAnswersBtn';
  button.textContent = 'Show/Hide all answers';
  navbar.appendChild(button);

  const answers = document.querySelectorAll('.search_correct_response');
  if (answers.length === 0) {
    console.error('No answer elements found');
    return;
  }

  button.addEventListener('click', function() {
    const firstAnswer = document.getElementById('answer_1');
    if (!firstAnswer) {
      console.error('First answer element not found');
      return;
    }

    // Toggle visibility based on the current state of the first answer.
    // If it's not explicitly set to 'visible', we'll assume it's 'hidden'.
    const isVisible = firstAnswer.style.visibility === 'visible';
    answers.forEach(el => {
      el.style.visibility = isVisible ? 'hidden' : 'visible';
    });
  });
});
