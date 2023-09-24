//creating a function that calculatesdemeritpoints and takes in speed as input
function calculateDemeritPoints(speed) {
    //here we are declaring a constant variable and assigning it a value 70;
  const speedLimit = 70;
  //here we are declaring demeritpoints and initializing it to 0; 
  let demeritPoints = 0;
//here we are giving our program a condition that if speed is less than 70(speedlimit declared above)it should go on and print Ok
  if (speed < speedLimit) {
    console.log("Ok");
    //else (if the speed is equal or more than that) it should proceed and do the following
  } else {
    /**
     * here we are calculating the demerit points .
     * math.floor makes a value like 79.9 to be rounded of to 79 and this helps to get integer values instead of floating values
     */
    demeritPoints = Math.floor((speed - speedLimit) / 5);
    //we are telling our program that if demeritpoints are more than 12 to print license suspended else tell the driver how many demerit points he/she has.
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`you have ${demeritPoints} demerit Points`);
    }
  }
}
//when  the argument(speed) is passed in the function , demerit points are calculated if speed is above 70
console.log(calculateDemeritPoints());