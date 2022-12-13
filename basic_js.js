/* JavaScript playground - just test for fun :) */

/* Array and object */
const nameArray = ["Joe", "Ben", "Sarah", "Jennifer"];
const carObj = {type: "Fiat", model: "500", color: "white"};
document.write(carObj.type, carObj.model, carObj.color);

/* Push, shift, unshift and delete */


/* Reusable function */
function nFunction (p1, p2) {
    return p1 + p2;
};
document.write(nFunction(2, "money"));

/* Global scope & functions */



/* Functions without return statement */
let cash = 450;

function addCash(paid) {
    cash = cash + paid;
}
addCash(450);
addCash(450);
document.write(cash);