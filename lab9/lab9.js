$(document).ready(function() {
    // Function to toggle the special class for a given section
    function toggleSpecial(sectionId) {
        $(`#${sectionId}`).toggleClass("special");
    }

    // Add buttons and click listeners for each section
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");
    $("#button-challenge").click(function() {
        toggleSpecial("challenge");
    });

    $("#problems").append("<button id='button-problems'>Make Special</button>");
    $("#button-problems").click(function() {
        toggleSpecial("problems");
    });

    $("#results").append("<button id='button-results'>Make Special</button>");
    $("#button-results").click(function() {
        toggleSpecial("results");
    });
});
