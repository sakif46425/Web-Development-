// Input string with marks
let input = "75.25, 65, 80, 35.45, 99.50";

// Convert the input string into an array of numbers
let marks = input.split(',').map(mark => parseFloat(mark.trim()));

// Calculate the sum of marks
let total = marks.reduce((sum, value) => sum + value, 0);

// Calculate the average
let average = total / marks.length;

// Print the result with 2 decimal places
console.log(average.toFixed(2));
