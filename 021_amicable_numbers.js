/*
    Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

    If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

    For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; 
    
    therefore d(220) = 284. 
    
    The proper divisors of 284 are 1, 2, 4, 71 and 142; 
    
    so d(284) = 220.

    Evaluate the sum of all the amicable numbers under n.
*/

function sumAmicableNum(n) {
    const sumDivisors = {};
    for (let i = 2; i < n; i++) {
        sumDivisors[i] = sumProperDivisors(i);
    }

    let sum = 0;
    for (let i = 2; i < n; i++) {
        let sumDivisorsI = sumDivisors[i];
        if (sumDivisors[sumDivisorsI] === i && i !== sumDivisorsI) sum += i;
    }
    return sum;
}

function sumProperDivisors(n) {
    const nCopy = n;
    const primeFactorization = {};
    let prime = 2;
    while (prime<= n && prime !== nCopy) {
        if (n % prime === 0) {
            let exponent = primeFactorization[prime];
            primeFactorization[prime] = exponent? exponent+1 : 1;
            n /= prime;
          } else prime++;
    }
    let sum = 1;
    for (const [prime, exponent] of Object.entries(primeFactorization)) {
        sum *= (prime**(exponent+1)-1)/(prime-1);
      }
    return sum - nCopy;
}
  
console.log(sumAmicableNum(2000));
