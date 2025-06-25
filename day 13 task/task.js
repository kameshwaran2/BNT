let x = "100";
let y = 50;

let result = Number(x) + y; 
console.log(result);

let value = "12345"; 
let no=12;
 
console.log(typeof value);  
console.log(typeof no); 

let value1 = "12345";

console.log(value1.charAt(0)); 
console.log(value1.charAt(2)); 
console.log(value1.charAt(4)); 
//lastindex
let abc="kameshwaran"
console.log(abc.lastIndexOf("a"));
//array
let arra = [10, 20, 30, 40];

arra.push(50);            
arra.reverse(30);      

console.log(arra)
//splice
let array = [10, 20, 30, 40];
array.splice(1, 1); 
console.log(array); 

//typecast
let val = "123"; 
let strValue = Number(val); 
console.log("String:", strValue); 
let re = strValue + 10; 
console.log("Final Result:", re);

//parseint
let a = "123";
let b = parseInt(a); 
console.log(b); 
console.log(typeof b); 

let c = "123.45";
let d = parseFloat(c);
console.log(d); // 123.45
console.log(typeof d); // "number"

