//creating a function calculateNetPay

function calculateNetPay(basicSalary, benefits) {
  /**
   * declaring variables grosspay which will store value of basicSalary + benefits
   * declaring variables payee, nhifdeductions ,nssf and netsalary which will store values that are numbers since they have been initialized to a number 0
   */

  let grosspay = basicSalary + benefits;
  let payee = 0;
  let nhifDeduction = 0;
  let nssf = 0;
  let netSalary = 0;

  //calculating nssf deductions

  nssf = (6 / 100) * grosspay;
  /**
   * calculating nhifdeductions using the if ..else if statement
   * we use the AND operator so as to tell our if that both statements have to be met so as to assign nhifdeduction the value
   * like in the first condition we are telling our program that if range of grosspay is between 0 to 5999 then the nhifdeduction should be 150
   *
   */

  if (grosspay >= 0 && grosspay <= 5999) {
    nhifDeduction = 150;
  } else if (grosspay >= 6000 && grosspay <= 7999) {
    nhifDeduction = 300;
  } else if (grosspay >= 8000 && grosspay <= 11999) {
    nhifDeduction = 400;
  } else if (grosspay >= 12000 && grosspay <= 14999) {
    nhifDeduction = 500;
  } else if (grosspay >= 15000 && grosspay <= 19999) {
    nhifDeduction = 600;
  } else if (grosspay >= 20000 && grosspay <= 24999) {
    nhifDeduction = 750;
  } else if (grosspay >= 25000 && grosspay <= 29999) {
    nhifDeduction = 850;
  } else if (grosspay >= 30000 && grosspay <= 34999) {
    nhifDeduction = 900;
  } else if (grosspay >= 35000 && grosspay <= 39999) {
    nhifDeduction = 950;
  } else if (grosspay >= 40000 && grosspay <= 44999) {
    nhifDeduction = 1000;
  } else if (grosspay >= 45000 && grosspay <= 49999) {
    nhifDeduction = 1100;
  } else if (grosspay >= 50000 && grosspay <= 59999) {
    nhifDeduction = 1200;
  } else if (grosspay >= 60000 && grosspay <= 69999) {
    nhifDeduction = 1300;
  } else if (grosspay >= 70000 && grosspay <= 79999) {
    nhifDeduction = 1400;
  } else if (grosspay >= 80000 && grosspay <= 89999) {
    nhifDeduction = 1500;
  } else if (grosspay >= 90000 && grosspay <= 99999) {
    nhifDeduction = 1600;
  } else if (grosspay >= 100000) {
    nhifDeduction = 1700;
  }

  /**
   * calculating the monthly payeee between the given values
   * we are using the AND operator to tell our program that both conditions have to be met so as to provide the specified outcome.
   *  like in the first condition we are telling our program that if range of grosspay is between 0 to 24000 then the payee should be 10% of the grosspay
   */

  if (grosspay >= 0 && grosspay <= 24000) {
    payee = (10 / 100) * grosspay;
  } else if (grosspay >= 24001 && grosspay <= 32333) {
    payee = (25 / 100) * grosspay;
  } else if (grosspay >= 32334 && grosspay <= 500000) {
    payee = (30 / 100) * grosspay;
  } else if (grosspay >= 500001 && grosspay <= 800000) {
    payee = (32.5 / 100) * grosspay;
  } else if (grosspay > 800000) {
    payee = (35 / 100) * grosspay;
  }

  //we are telling our function that netsalary should be returned but netsalary but the netsalary is less all the deductions meaning that it is grosspay - all deductions

  netSalary = grosspay - (nhifDeduction + payee + nssf);
  //what will be returned is netSalary which equals the grosspay - alldeductions
  return netSalary;
}
