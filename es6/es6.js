/* Let, var & function, block scope */
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
//   document.write(checkScope());

/* Arrow function */
const greeting = (name) => name + " have a nice day!";
document.write(greeting("John"));
/* Default parameters */
const multiply = (num1 = 1, num2 = 1) => num1 * num2;
document.write(multiply());
document.write(multiply(2, 5));