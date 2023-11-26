// ==UserScript==
// @name         J-Archive Plus Enhanced
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Shows Jeopardy answers on J-Archive more efficiently
// @author       Colin Mason
// @match        *://*.j-archive.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Helper function to create a toggle button
    function createToggleButton() {
        const button = document.createElement('button');
        button.textContent = 'Show/Hide all answers';
        button.style.position = 'fixed';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.zIndex = '1000';
        return button;
    }

    // Toggle answers on search result pages
    function toggleSearchAnswers() {
        const answers = document.querySelectorAll('.search_correct_response');
        if (answers.length === 0) {
            console.error('No answer elements found');
            return;
        }
        const isVisible = answers[0].style.visibility === 'visible';
        answers.forEach(el => {
            el.style.visibility = isVisible ? 'hidden' : 'visible';
        });
    }

    // Toggle answers on game pages
    function toggleGameAnswers() {
        const correctResponses = document.querySelectorAll('.correct_response');
        correctResponses.forEach(function (correctResponse) {
            const clueTextTd = correctResponse.closest('tr').querySelector('.clue_text');
            if (!clueTextTd) return;

            const answerElement = clueTextTd.querySelector('.answer-text');
            if (answerElement) {
                // Remove the answer and the breaks
                clueTextTd.querySelectorAll('.answer-break').forEach(br => clueTextTd.removeChild(br));
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
        });
    }

