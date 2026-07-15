// There are two types of data types in JavaScript: primitive and non-primitive (also known as reference) data types.

// Primitive data types include: 
// number,string,boolean,undefined,null,symbol and bigint.

// Non-primitive data types include: 
// object, array, function.

/*------------------------------------------------------------------*/

                    // Memory 

                  //  Stack and Heap

// Primitive data types are stored in stack memory. 
// Non-primitive data types are stored in heap memory.

//In stack changes are made to the copy of the value, 
//while in heap changes are made to the reference of the value. 

// Example of Stack memory:
let a = 10;
let b = a; // b gets a copy of a's value
b = 20; // changing b does not affect a
console.log(a);
console.log(b);

// Example of Heap memory:
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Doe"; // changing obj2 affects obj1
console.log(obj1.name);
console.log(obj2.name);

