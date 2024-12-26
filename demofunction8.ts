//name function with number as parameters type and return type


function add(a:number,b:number):number{
    return a+b;
}

//anonymous function with number as parameters type and return typr

let sum=function add(a:number,b:number):number{
    return a+b;
};


console.log(add(3,5));
console.log(sum);