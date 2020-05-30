function nthPrime(n) {
    if (n === 1) return 2;
    if (n === 2) return 3;
    if (n === 3) return 5;
    let count = 3;
    let prime = "";
    for(let i = 7; count<n; i+=2){
        if(isPrime(i)){ 
            count++;
            prime = i;
        }
    }
    return prime
}

function isPrime(n) {
  if (n % 3 == 0) return false;
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}

console.log(nthPrime(10001));
