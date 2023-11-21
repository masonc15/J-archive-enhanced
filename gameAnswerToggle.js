if (window.location.href.startsWith('https://j-archive.com/showgame.php')) {
    // Wait for the DOM to fully load
    document.addEventListener('DOMContentLoaded', function () {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle All Answers';
        document.body.insertBefore(toggleButton, document.body.firstChild);

        toggleButton.addEventListener('click', function () {
            const clues = document.querySelectorAll('#jeopardy_round .clue');

            clues.forEach(function (clue) {
                const correctResponse = clue.querySelector('.correct_response');
                if (correctResponse) {
                    if (correctResponse.style.display === 'none' || correctResponse.style.display === '') {
                        correctResponse.style.display = 'block';
                    } else {
                        correctResponse.style.display = 'none';
                    }
                }
            });
        });
    });
}
