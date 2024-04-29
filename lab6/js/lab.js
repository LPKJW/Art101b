// index.js - purpose and description here
// Author: Lars Widman <lpwidman@ucsc.edu>
// Date: April 28th, 2024

// Define Variable
myTransport = ["car", "bicycle", "bus", "train", "walking"];
// create an object for my main ride
myMainRide = {   
make: "Ford",
model: "Taurus",
color: "Rusty",
year: 1995,
// we can define a function within our object (called a method)
// that uses the value of year above (using this.year)
age: function() { 
    return 2024 - this.year;
}
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
//this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
