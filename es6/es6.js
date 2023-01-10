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
  // document.write(checkScope());

/* Arrow function */
const greeting = (name) => name + " have a nice day!";
// document.write(greeting("John"));
/* Default parameters */
const multiply = (num1 = 1, num2 = 1) => num1 * num2;
// document.write(multiply());
// document.write(multiply(2, 5));

/* Object freeze */
// Object.freeze(carObj);
// carObj.type = "Audi";
// console.log(carObj.type);

/* Rest parameter */
const howMany = (...args) => "You have passed " + args.length + " arguments.";
// document.write(howMany(0, 2, 3, "bye", [5, 6, 7], {}));

/* Spread operator */
let nameArrayCopy = [...nameArray];
// document.write(nameArrayCopy);

/* Destructuring Assignment */
const {type, model} = carObj;
// document.write(type);
const {type: carType, model: carModel} = carObj;
// document.write(carModel);
const [a,,b,,c] = nameArray;
// document.write(a, b, c);

