(function() {
  const google = document.getElementById("navbar");
  if (!google) {
      console.error('Navbar element not found');
      return;
  }
  const button = document.createElement("button");
  button.id = "aButton";
  const text = document.createTextNode("Show/Hide all answers");
  button.appendChild(text);
  google.appendChild(button);

  const answers = document.querySelectorAll('.search_correct_response');
  if (answers.length === 0) {
      console.error('No answer elements found');
      return;
  }

  const theButton = document.getElementById('aButton');
  theButton.addEventListener('click', function () {
    const firstAnswer = document.getElementById("answer_1");
    if (!firstAnswer) {
      console.error('First answer element not found');
      return;
    }
  
    // Toggle visibility based on the current state of the first answer.
    // If it's not explicitly set to 'visible', we'll assume it's 'hidden'.
    let visibility = firstAnswer.style.visibility === 'visible' ? 'hidden' : 'visible';
    answers.forEach(el => el.style.visibility = visibility);
  });
  
})();
