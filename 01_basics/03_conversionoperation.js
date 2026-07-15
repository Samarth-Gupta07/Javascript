let score = 100; 
let scoreString = String(score); // Convert number to string
console.log(typeof scoreString);
console.log(scoreString);

let name = "Alice";
let nameNumber = Number(name);
console.log(typeof nameNumber);
console.log(nameNumber);    

let isloggedIn = "" ;
/* 1 and 0 will be converted to true and false respectively in boolean but empty 
string, null, undefined, NaN will be converted to false in boolean. */
let isloggedInBoolean = Boolean(isloggedIn);
console.log(typeof isloggedInBoolean);
console.log(isloggedInBoolean);  
