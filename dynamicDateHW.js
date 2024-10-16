// Create a new Date object to get the current date
var today = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = today.toLocaleDateString('en-US', options);
var paragraph = document.createElement('p');
paragraph.textContent = "Today's date is: " + formattedDate;
document.body.appendChild(paragraph);
