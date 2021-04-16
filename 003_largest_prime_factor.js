/*
  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the given number?
*/

function largestPrimeFactor(n) {
  let prime = 2,
    maxPrime = 1;

  while (prime <= n) {
    if (n % prime === 0) {
      maxPrime = prime;
      n /= prime;
    } else prime++;
  }
  return maxPrime;
}

console.log(largestPrimeFactor(13195));
