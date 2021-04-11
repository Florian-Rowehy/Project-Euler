/*
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below n.
*/

function primeSummation(n) {
    if (n <2 ) return 0;

    let sum = 2;
    if (n === 2) return sum;

    for (let i = 3; i<n; i+=2) {
      if (isPrime(i)) 
        sum += i
    }
    return sum
}

function isPrime(n) {
  if (n <= 4) 
    return n !== 4 && n > 0;

  if (n % 3 == 0) 
    return false;
    
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) 
      return false;
  }
  return true;
}

console.log(primeSummation(17));
