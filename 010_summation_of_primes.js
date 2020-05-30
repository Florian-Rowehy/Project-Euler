function primeSummation(n){
    if(n < 5) return
    let sum = 2+3+5;
    for(let i = 7; i<n; i+=2){
        if(isPrime(i)) sum += i
    }
    return sum

}

function isPrime(n) {
  if (n % 3 == 0) return false;
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}

console.log(primeSummation(17));

