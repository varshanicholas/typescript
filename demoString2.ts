let empName:string="Rohan";
let empDept:string="IT";
 
//Before -ES6

let output1:string=empName +"works in the "+empDept+ "department ";


//After -ES6

let output2: string=`${empName}works in the ${empDept} department.`;


console.log("String Demo ");
console.log("-----------  ");

console.log(output1);
console.log(output2);
