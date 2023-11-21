document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar'); // Assuming 'navbar' is the ID of the container
    if (!navbar) {
        console.error('Navbar element not found');
        return;
    }

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle All Answers';
    navbar.appendChild(toggleButton); // Append to a defined element

    toggleButton.addEventListener('click', function () {
        const clues = document.querySelectorAll('#jeopardy_round .clue');

        clues.forEach(function (clue) {
            const correctResponse = clue.querySelector('.correct_response');
            if (correctResponse) {
                correctResponse.style.display = correctResponse.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});
