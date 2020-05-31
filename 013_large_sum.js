function largeSum(arr) {
  //get biggest number length
  let maxNlength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxNlength) maxNlength = arr[i].length;
  }

  //do sum while column at the time; can probably be optimized by doing several column at the time
  const total = [];
  let index = 0;
  for (let j = 0; j < maxNlength; j++) {
    //do sum
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let length = arr[i].length;
      if (!arr[i][length - 1 - j]) break;
      sum += +arr[i][length - 1 - j];
    }
    //transform sum
    let indexValue = total[index] ? +total[index] + sum : sum;
    const strSum = String(indexValue);
    total[index] = strSum[strSum.length - 1];
    const remainder = strSum.slice(0, strSum.length - 1);
    total[index + 1] = remainder;
    index++;
  }

  //concat the results
  let answer = "";
  for (let i = total.length - 1; i > 0; i--) {
    answer += total[i];
  }

  //return first 10 digits
  return +answer.slice(0, 10);
}

// Only change code above this line

const testNums = [
  "37107287533902102798797998220837590246510135740250",
  "46376937677490009712648124896970078050417018260538",
];

console.log(largeSum(testNums));

/* 
input [string]
  return num   with num.length===10

arr[i][length-1]+arr[i+1][length-1]+...+arr[i+length-1][length-1]
push in arr1[0]
then
take the 10n and pass arr1[1]
then
arr[i+1][length-2]+arr[i+1][length-2]+...+arr[i+1][length-2]
push in arr1[1] + arr1[1]
...
arr[i+length-1][length-maxNlength]+arr[i+length-1][length-maxNlength]+...+arr[i+length-1][length-maxNlength]
*/
