/*
    The sum of the squares of the first ten natural numbers is,

    12 + 22 + ... + 102 = 385
    The square of the sum of the first ten natural numbers is,

    (1 + 2 + ... + 10)2 = 552 = 3025
    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

    Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

function sumSquareDifference(n) {
    const sumOfSquares = (n * (n+1) * (2*n+1))/6;
    const squareOfSums = (n*(n+1)/2)**2 ;
    return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(10));
