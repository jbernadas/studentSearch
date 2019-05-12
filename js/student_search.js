var message ='';
var student; // will store index number of student
var search;

// For printing messages and outputs to HTML
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

// Actual script for looking for name
while (true) {
  // prompts user
  search = prompt("Please type the name of student you wish to find or 'quit' to exit this program.");
  // iterates through students list to find match to user input
  for (var i = 0; i < students.length; i++) {
    if (students[i].name === search) {
      student = i; // if found saves it into student variable
    }
  }
  // if user inputs nothing or types 'quit' exit script
  if(search === null || search.toLowerCase() === 'quit') {
    break;
  } else if (student > -1) { // if the student variable has item output message
      message += "<p>Name: " + students[student]['name'] + "<br/>";
      message += "Track: " + students[student]['track'] + "<br/>";
      message += "Track: " + students[student]['achievements'] + "<br/>";
      message += "Track: " + students[student]['points'] + "<p/>";
  } else {
      message = 'Sorry, nobody by that name.'; // if all other input, output this
  }
}

print(message);