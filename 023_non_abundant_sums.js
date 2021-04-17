/*
    A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
    
    For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

    A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

    As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two 
    
    abundant numbers is 24. 
    
    By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
    
    However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that 
    
    cannot be expressed as the sum of two abundant numbers is less than this limit.

    Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.
*/

function sumOfNonAbundantNumbers(n) {
    let abundantNbs = [];
    //12 is the smallest abundant number
    for (let i = 12; i < n; i++) {
        if (isAbundantNumber(i)) abundantNbs[abundantNbs.length] = i;
    }
    const set = new Set();
    for (let i=0; i<abundantNbs.length; i++) {
        for (let j=i; j<abundantNbs.length; j++) {
            set.add(abundantNbs[i] + abundantNbs[j]);
        }
    }
    let totalSumN = n * (n+1) / 2;
    let sumNbWrittenWithAbundantNumbers = 0;
    set.forEach(value => {
        if (value <= n ) sumNbWrittenWithAbundantNumbers += value;
    });
    return totalSumN - sumNbWrittenWithAbundantNumbers;
}

function isAbundantNumber(n) {
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
    return (sum - nCopy) > nCopy;
}

console.log(sumOfNonAbundantNumbers(10000));
