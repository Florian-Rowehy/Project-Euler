/*
    215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

    What is the sum of the digits of the number 2exponent?
*/

function powerDigitSum(exponent) {
    let exp2result = [1];
    if (exponent % 2 !== 0) {
        exp2result = [2];
        exponent--;
    }
    for (exponent; exponent > 0; exponent -=2) {
        let remainder = 0;
        for (let i=0; i<exp2result.length; i++) {
            let multiplicationResult =  exp2result[i] * 4 + remainder;
            exp2result[i] = multiplicationResult % 10;
            remainder = (multiplicationResult - exp2result[i])/10;
        }
        exp2result[exp2result.length] = remainder;
    }
    return exp2result.reduce((a, b)=>a + b, 0);
}
  
console.log(powerDigitSum(3));
