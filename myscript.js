
var google = document.getElementById("navbar");
var button = document.createElement("button");
button.id = "aButton";
var text = document.createTextNode("Show/Hide all answers");
button.appendChild(text);
google.appendChild(button);
var theButton = document.getElementById('aButton');

theButton.addEventListener('click', function () {
  if (document.getElementById("answer_1").style.visibility == "hidden" || document.getElementById("answer_1").style.visibility == '') {
    for (let el of document.querySelectorAll('.search_correct_response')) el.style.visibility = 'visible';
  }
  else {
    for (let el of document.querySelectorAll('.search_correct_response')) el.style.visibility = 'hidden';
  }
});
