// index.js - purpose and description here
// Author: Lars Widman <lpwidman@ucsc.edu>
// Date: May 6th, 2024

function isEven(x) {
    return (x % 2 == 0);
}

// Test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

var array = [100, 81, 4, 16, 42, 144, 10000]; // Declare 'array' using var, let, or const
console.log("My array", array);

var result = array.map(isEven);
// Should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array:", result);

var resultSqrt = array.map(function(x) {
    return x ** 0.5;
});
// Should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Square root of array", resultSqrt);

// Your map results data
var mapResults = "Your map results here";

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);