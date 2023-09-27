// Prompt the user to enter the car's speed as a number
const speedInput = parseFloat(prompt("Enter the car's speed (in km/h):"));

// Check if the input is a valid number
if (!isNaN(speedInput)) {
  const speed = Number(speedInput); // Convert the input to a number
  const speedLimit = 70;
  let demeritPoints = 0;

  if (speed <= speedLimit) {
    alert("Ok");
  } else {
    const excessSpeed = speed - speedLimit; //to get the excess speed so hat we calculate the demerit points
    demeritPoints = Math.floor(excessSpeed / 5); //calculating demerit points
    //condition if there are damerit points so as to give a driver his demerit points
    if (demeritPoints <= 12) {
      alert(`Demerit points: ${demeritPoints}`);
    } else {
      alert("License Suspended");
    }
  }
} else {
  alert("Please enter a valid numeric speed.");
}
