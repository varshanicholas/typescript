"use strict";
let empName = "Rohan";
let empDept = "IT";
//Before -ES6
let output1 = empName + "works in the " + empDept + "department ";
//After -ES6
let output2 = `${empName}works in the ${empDept} department.`;
console.log("String Demo ");
console.log("-----------  ");
console.log(output1);
console.log(output2);
