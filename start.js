const a = 26, b = 56, c = 1;
// Math.max method - easiest method
// x = Math.max(a, b, c);
// console.log(x);

// DRY method - lambda expressions

// const findLargest = (a, b, c) => {
//     return (a > b && a > c)?a 
//     : (b >=a && b >= c)?b 
//     : c
//     if (a >= b && a >= c) {
//         return a;
//     }
//     else if (b >= a && b >= c) {
//         return b;
//     }
//     else {
//         return c;
//     }
// }

// Function method

function arrayLargest(a, b, c) {
    let highest = 0;
    let numbers = [a, b, c];
    numbers.forEach((number)=> {
        if (number > highest) {
            highest = number;
        }
    });
    return highest;
}


//Console log outputs

// const largestNumber =  findLargest(a, b, c);
console.log("Largest number:", largestNumber);
module.exports = { largestNumber };