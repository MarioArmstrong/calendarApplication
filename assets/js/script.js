var displayDate = document.getElementById("displayTodaysDate");
var displayHours = document.getElementById("hour");
var now = moment().format("MMMM Do, YYYY hh:mm");
var hourRow = moment().format("H");

displayDate.textContent = now;

displayHours.textContent = hourRow;




