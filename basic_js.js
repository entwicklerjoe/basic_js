/* JavaScript playground - just test for fun :) */

/* Array and object */
const nameArray = ["Joe", "Ben", "Sarah", "Jennifer"];
const carObj = { type: "Fiat", model: "500", color: "white" };
const tier = {
    1: { min: 1, avg: 10, max: 20 },
    2: { min: 21, avg: 30, max: 40 },
    3: { min: 41, avg: 50, max: 60 },
    4: { min: 61, avg: 70, max: 80 },
    5: { min: 81, avg: 90, max: 99 }
};
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
function nFunction(p1, p2) {
    return p1 + p2;
};
// document.write(nFunction(2, "money"));

/* If...else & switch */
function addYourCar(object, property, value) {
    if (object.hasOwnProperty(property) && value != "") {
        object[property] = value;
    } else if (object.hasOwnProperty(property) != property && value != "") {
        let xProp = property;
        object[xProp] = value;
    } else if (value === "" || property === "") {
        return alert("You need add some property and value!");
    }
}
addYourCar(carObj, "ps", "65");
// document.write(carObj.ps);

/* Check Object Function */
function checkObj(object, property) {
    if (object.hasOwnProperty(property)) {
        return object[property];
    } else {
        return "Property not found";
    }
};
// document.write(checkObj(carObj, "type"));

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
while (i <= 50 && i >= 0) {
    counterWhile.push(i);
    i--;
};
// document.write(counterWhile);

/* For loop */
const counterFor = [];
for (let i = 0; i < 20; i++) {
    counterFor.push(i);
}
// document.write(counterFor);
const counterBackEven = [];
for (let i = 10; i >= 0; i -= 2) {
    counterBackEven.push(i);
}
// document.write(counterBackEven);
let nameArrayCopy = [];
for (let i = 0; i < nameArray.length; i++) {
    nameArrayCopy += nameArray[i];
}
// document.write(nameArrayCopy);
const testArr = [3, 4, 5, 6, 7, 8];
let total = 0;
for (let i = 0; i < testArr.length; i++) {
    total += testArr[i];
}
// document.write(total);

/* Nested for loops */
const arr = [[1, 2], [3, 4], [5, 6]];
function multiplyAll(arr) {
    let totalArr = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            totalArr *= arr[i][j];
        }
    }
    return totalArr;
};
// document.write(multiplyAll(arr));

/* Do...while loop */
const myNumber = [];
let s = 5;
do {
    myNumber.push(s);
    s++;
} while (s < 20);
// document.write(myNumber);

/* Recursive functions v1 */
const sumArr = [1, 2, 3, 4, 5];
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
};
//   document.write(sum(sumArr, 3));

/* Loop & function */
const loopCount = null;
let alphabet = [];
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
}
// document.write(alphabet);

/* Math.random & Math.floor */
function rndWholeNum() {
    let x = Math.floor(Math.random() * 10);
    return x;
}
// document.write(rndWholeNum());

/* Math.random & Math.floor with Function(par1, par2) */
function rndRange(xMin, yMax ) {
    let result = Math.floor(Math.random() * (yMax - xMin + 1)) + xMin;
    return result;
}
// document.write(rndRange(2, 12));

/* parseInt & parseFloat */
function convertToInt(str, rdx) {
    let result = parseInt(str, rdx);
    return result;    
}
// document.write(convertToInt(3900, 16));
function convertToFloat(str) {
    let result = parseFloat(str);
    return result;
}
// document.write(convertToFloat(3900));

/* Ternary Operators */
function checkParameters(x, y, z) {
    return (x, y, z === 0) ? "Zero"
        : (x, y, z > 0) ? "Positive"
        : (x, y, z < 0) ? "Negative"
        : (x > y > z) ? "Greater"   //test
        : (x < y < z) ? "Lesser"    //test
        : "Fatal error";            //test
}
// document.write(checkParameters(6, 4, 2));

/* Recursion function v2 */
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
//   document.write(countup(5));

