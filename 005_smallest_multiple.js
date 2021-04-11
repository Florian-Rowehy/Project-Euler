/*
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function smallestMult(n) {
  let smallestMultiple = 1;
  
  for (let i = 2; i<=n; i++) {
    smallestMultiple *= i / gcd (smallestMultiple, i);
  }

  return smallestMultiple;
}

console.log(smallestMult(10));


function gcd(n, d) {
  if (d === 0)
    return n;
  return gcd(d, n%d);
}
