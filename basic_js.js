/* JavaScript playground - just test for fun :) */

/* Array and object */
const nameArray = ["Joe", "Ben", "Sarah", "Jennifer"];
const tierObj = [{ "name": "Beni", "tier": "dog", "color": "black&grey", "age": 5 },
{ "name": "Bo", "tier": "cat", "color": "yellow&white", "age": 8 }];

/* Push, shift, unshift and delete */
nameArray[1] = "Joachim";
nameArray[3] = ["Ben", "Thomas", "Noel"];
nameArray[4][2] = "Flash";
nameArray.push([1, 2, 3, 4]);
nameArray.unshift("Kroc");
nameArray.shift();
nameArray.pop();

/* Reusable function */
function nFunction (p1, p2) {
    return p1 + p2;
};
nFunction(2, "money");

/* Global scope & functions */
const myGlobalScope = "funny";
function notFunnyFunction() {
    myLocalScope = 1000;
};
function funnyFunction() {
    let result = "";
    if (typeof myGlobalScope != "string") {
        result += "myGlobalScope: " + myGlobalScope + "Not a string";
    } else if (typeof myGlobalScope != "number") {
        result += "myGlobalScope: " + myGlobalScope + "Not a number";
    } else {
        result == myLocalScope + "x need you practice!"
    document.write(result);
    };
};
