# Toy-assignment

# My Toy-code Challenge assignment

## Description
This is a project that calculatesNetPay ,helps in Grading and helps to control Speed limit around

## Setup Instructions
To get started with this project, follow these steps:

1. Clone the repository: `git clone git@github.com:mbari60/Toy-assignment.git`
2. Navigate to the project directory: `cd mbari60/Toy-assignment`
3. Get into the project : `code .`

## Author
- kevin mbari
- Email: kevinmbari600@gmail.com

## License

 
## more information 

In this assignment we are required to do 3 tasks 

# 1.Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

In this question we will use a nested if, ie . if ...else if statement and return grade which will be output.
we will also use the && operators to give condition of the marks ie for the fast grade "A"
we will give a condition that marks should range between 80 and 100 and use the AND operator for the condion to be met.
syntax   if(marks>=80 && marks <=100) grade "A" will be returned .
we have used the  marks <=100 so that marks can not exceed 100 since marks usually have a maximum value of A and <=0 since marks cannot be below 0.



# 2.Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

In this question i used a nested , if .... else if statement.
if drivers speed is less than 70 which is the speed limit then "OK" is printed 
if the speed is more than 70 for every 5km/s 1 point is given and this we obtain by (speed-speedlimit)/5 so that if speed is 75 for example it will be 
(75-70)/5 to give one demerit point.we use math.floor to round of our answer downwards and not upward meaning 79.9 will be rounded to 79 so that we ca work with integer values and avoid giving demerit points as a result of round off.
if speed gets to 135 where demerit points are more than 12 then the program outputs license suspended.


# 3.Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

In this case i used if else if statement and the AND operator to give conditions to the values provided in the KRA webpage for the NHIF and PAYE and for the nssf i just wrote a single line instruction to calculculate the nssf 
grosspay should be an addition of benefits and basicSalary and i made sure i declared it.
for nssf and nhifdeductions and paye i first initialized them to 0 tellling the program that numbers will be stored in the containers;
for netSalary i declared it and initilized it to 0 , then i assigned it value of grosspay - all deductions
The program returned netSalary which was expected to return.


