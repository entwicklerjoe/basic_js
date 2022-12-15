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
const myCar = "type";  // value access
const carIn = carObj[myCar];
// document.write(carIn);
carObj.cubic = "1.3";  // new prop
carObj.ps = "69";
// document.write(carObj.cubic);
delete carObj.ps;  //delete
const cubicCapacity = "cubic";  // lookup
const cubicLookup = carObj[cubicCapacity];
// document.write(cubicLookup);
carObj.hasOwnProperty("type");
carObj.hasOwnProperty("ps");
// document.write(carObj.hasOwnProperty("type"));
// document.write(carObj.hasOwnProperty("ps"));

/* Reusable function */
function nFunction (p1, p2) {
    return p1 + p2;
};
// document.write(nFunction(2, "money"));

/* Check Object Function */
function checkObj(object, property) {
    if (object.hasOwnProperty(property)) {
        return object[property];
    } else {
        return "Property not found";
    }
};
// document.write(checkObj(carObj, "ps"));

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

/* While Loop */
const counterWhile = [];
let i = 50;
while (i <=50 && i >=0) {
    counterWhile.push(i);
    i--;
};
// document.write(counterList);

/* For loop */
const counterFor = [];
for (let i = 0; i < 20; i++) {
    counterFor.push(i);
}
// document.write(counterFor);
const counterBackEven = [];
for (let i = 10; i >= 0; i -=2) {
    counterBackEven.push(i);
}
// document.write(counterBackEven);
