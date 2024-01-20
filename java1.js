var userName = prompt("What is your name?");

alert("Greetings, " + userName + "! Welcome to My webpage. Hope you Enjoy you stay.");

function calculateRectangleArea(length, width) {
    return length * width;
}

var length = prompt("Enter the length of the rectangle:");

length = parseFloat(length);

var width = prompt("Enter the width of the rectangle:");

width = parseFloat(width);

var area = calculateRectangleArea(length, width);

alert("The area of the rectangle is: " + area);