function calculateNetPay(basicSalary, benefits) {
  // Declaring  variables for calculations
  let grosspay = basicSalary + benefits;
  let payee = 0;
  let nhifDeduction = 0;
  let nssf = 0;
  let netSalary = 0;

  // Calculating  NSSF deductions which are (6% of grossPay)
  nssf = (6 / 100) * grosspay;

  // Calculating NHIF deductions  using the ranges we were given
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

  // Calculating  PAYEE (Pay As You Earn)  using the ranges we were given
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
  // Calculating  netSalary by subtracting all deductions from grosspay
  netSalary = grosspay - (nhifDeduction + payee + nssf);

  // Return the netSalary
  return netSalary;
}

// Prompt the user to enter basicSalary and benefits
const basicSalaryInput = parseFloat(prompt("Enter your basic salary:"));
const benefitsInput = parseFloat(prompt("Enter your benefits:"));

// Check if the inputs are valid numbers
if (!isNaN(basicSalaryInput) && !isNaN(benefitsInput)) {
  // Call the function with user-provided values
  const userNetPay = calculateNetPay(basicSalaryInput, benefitsInput);
  // Display the result to the user
  alert(`Your net salary after all deductions is ${userNetPay}`);
} else {
  // Display an error message if the inputs are not valid numbers
  alert("Please enter valid numeric values for basic salary and benefits.");
}
