function isPrime(n) {
  if (n === 2 || n === 3 || n === 5) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}

function largestPrimeFactor(n) {
  if (isPrime(n)) return n;
  let i = Math.trunc(Math.sqrt(n));
  if (i % 2 === 0) i += 1;
  for (i; i > 1; i-=2) {
    if (Number.isInteger(n / i) && isPrime(i)) return i;
  }
  return 2;
}


console.log(largestPrimeFactor(13195));
