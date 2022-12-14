/* JavaScript playground - just test for fun :) */

/* Array and object */
const nameArray = ["Joe", "Ben", "Sarah", "Jennifer"];
const carObj = {type: "Fiat", model: "500", color: "white"};
// document.write(carObj.type, carObj.model, carObj.color);

/* Push, shift, unshift and delete */
nameArray.push("Paul", "Pauline");
nameArray.pop();
nameArray.shift();
nameArray.unshift("Johnny");
// document.write(nameArray);

/* Object manipulating */
const myCar = "type";
const carIn = carObj[myCar];
// document.write(carIn);
carObj.cubic = "1.3";
carObj.ps = "69";
// document.write(carObj.cubic);
delete carObj.ps;
const cubicCapacity = "cubic";
const cubicLookup = carObj[cubicCapacity];
document.write(cubicLookup);

/* Reusable function */
function nFunction (p1, p2) {
    return p1 + p2;
};
// document.write(nFunction(2, "money"));

/* Global scope & functions */ /* Not working yet... */
// let mid = 500;
// function myLocal() {
//     heavy = 1000;
//     easy = 100;
// };
// function printOut() {
//     let result = "";
//     if (mid === 500) {
//         result += "Not too heavy" + mid + "kg";
//     }
//     if (heavy === 1000) {
//         result += "It´s too heavy" + heavy + "kg";
//     }
//     if (easy === 100) {
//         result += "Easy" + easy + "kg";
//     }
//     return result;
// };

/* Functions without return statement */
let cash = 450;
function addCash(paid) {
    cash = cash + paid;
}
addCash(450);
// document.write(cash);
