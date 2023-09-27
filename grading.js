// Prompt the user to enter marks as a number
const input = prompt("Enter your marks (0-100):");
const marks = parseFloat(input);

// Check if the input is a valid number within the specified range
if (!isNaN(marks) && marks >= 0 && marks <= 100) {
  let grade;

  // Check the grade based on the marks
  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Display the grade in an alert
  alert(`Your grade is: ${grade}`);
} else {
  // Display an alert for invalid input
  alert("Please enter valid marks between 0 to 100.");
}
