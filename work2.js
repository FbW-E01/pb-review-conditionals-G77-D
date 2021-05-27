/*1. Save a random whole number between - 10 and 10 to a variable.*/

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const number = getRandom(-10, 10);
/* read this from mdn so not 100per*/

/*2. If that variable is greater than 0, print "Ye" and otherwise print "No"*/

if (number > 0) {
  console.log("Ye");
}
else  { 
  console.log("No");
}




/*3. If that variable is greater than 5, print "Winner", otherwise if that variable is greather than 0, print "OK", otherwise print "Try again!"*/

if (number > 5) {
  console.log("Winner");
}
else if ( number > 0) {
  console.log("ok");
}
else {
  console.log("tray again");
}

/*4. Save another random number between -10 and 10 to a variable.*/


const number1 = getRandom(-10, 10);

/*5. If both variables are more than 5, print "Good scores!"*/

if (number > 5 && number1 >5 ){
  console.log("Good scores");
}

/*6. If either variable is below -9, print "Minus nine!"*/

if (number < -9 || number1 < -9) {
  console.log("Minus nine ");
}

/*7. Create a variable to store a message. If your random numbers added together is smaller than zero, save the message "We have gone sub zero!". Otherwise, set the message to null.*/

let message = "tom"; 
if ((number + number1) < 0) {
  message = "we have gone sub zone";
}
else {
  message = null;
}
console.log(message);