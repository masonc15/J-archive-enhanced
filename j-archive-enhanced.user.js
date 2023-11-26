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
