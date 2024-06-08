/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field, processes it, and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes Modes
   Date: 2023
*/

// Function to sort a string into Hogwarts houses based on string length
function sortingHat(str) {
    // Get the length of the string
    const length = str.length;
    // Calculate the remainder when length is divided by 4
    const mod = length % 4;
    // Conditional to return a house based on the value of mod
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Ravenclaw";
    } else if (mod === 2) {
        return "Slytherin";
    } else {
        return "Hufflepuff";
    }
}

// Click listener for button
$("#button").click(function() {
    // Get value of input field
    const name = $("#input").val();
    // Run sortingHat function and store the result
    const house = sortingHat(name);
    // Append a new styled paragraph to #output with the result
    $("#output").html('<div class="text"><p>The Sorting Hat has sorted you into ' + house + '</p></div>');
});
