/*
    n! means n × (n − 1) × ... × 3 × 2 × 1

    For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
    and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

    Find the sum of the digits n!
*/

function sumFactorialDigits(n) {
    let result = [1];
    for (n; n > 1; n--) {
        let remainder = 0;
        for (let i=0; i<result.length; i++) {
            let multiplicationResult =  result[i] * n + remainder;
            result[i] = multiplicationResult % 10;
            remainder = (multiplicationResult - result[i])/10;
        }
        while(remainder) {
            result[result.length] = remainder%10;
            remainder = (remainder - remainder%10)/10;
        }
    }
    return result.reduce((a, b)=>a + b, 0);
}
  
console.log(sumFactorialDigits(100));
