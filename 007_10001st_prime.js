/*
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  What is the nth prime number?
*/

function nthPrime(n) {
  let count = 0;
  let prime = null;
  for(let i = 1; count<n; i+=2){
    if(isPrime(i)){ 
      count++;
      prime = i;
    }
  }
  return prime
}

function isPrime(n) {
  if (n <= 4)
    return n !== 4 && n > 0;
  
  if (n % 3 == 0) 
    return false;
  
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}

console.log(nthPrime(6));
