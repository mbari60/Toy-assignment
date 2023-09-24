//This program allows marks as input and gives grade as output.
function calculateGrade(marks) {
  //declaring variable grade
  let grade;
  /**using the if else if statement to give condition to the program
   *for this line 8 we are telling the program that  marks should range between 80 to 100 for a student to be awarded a grade A in line 9
   */
  if (marks > 79 && marks <= 100) {
    return (grade = "A");
  } else if (marks >= 60 && marks <= 79) {
    return (grade = "B");
  } else if (marks >= 50 && marks <= 59) {
    return (grade = "C");
  } else if (marks >= 40 && marks <= 49) {
    return (grade = "D");
  } else if (marks >= 0 && marks < 40) {
    return (grade = "E");
    //here we are telling the program that incase a person enters a invalid marks (not between range of 0 to 100) to tell the person to enter a valid marks between 0 to 100
  } else {
    return "enter valid marks between 0 to 100";
  }
}
//when argument are passed inside the function bellow for marks grade will be generated
console.log(calculateGrade());


