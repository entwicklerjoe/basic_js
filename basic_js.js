/* JavaScript playground - just test for fun :) */

/* Array and object */
const nameArray = ["Joe", "Ben", "Sarah", "Jennifer"];

const tierObj = [{ "name": "Benji", "tier": "dog", "color": "black&grey", "age": 5 },
{ "name": "Bogi", "tier": "cat", "color": "yellow&white", "age": 8 }];

/* Push, shift, unshift and delete */
nameArray[1] = "Joachim";
nameArray[3] = ["Ben", "Thomas", "Noel"];
nameArray.push([1, 2, 3, 4]);
nameArray[4][2] = "Flash";


document.write(nameArray);