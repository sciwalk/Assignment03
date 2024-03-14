//get first of two integers
const firstInteger = parseInt(prompt("Enter first of 2 integers"))

// get second of two integers
const secondInteger = parseInt(prompt("Enter second of 2 integers"))

if (firstInteger == secondInteger) {
    alert("The two integers are equal")
} else if (firstInteger > secondInteger) {
    alert(firstInteger + " is the largest integer") 
} else {
    alert(secondInteger + " is the largest integer")
}
