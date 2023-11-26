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
    });
});
