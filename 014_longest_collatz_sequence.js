function longestCollatzSequence(limit) {
  const start = limit % 2 === 0 ? limit-1 : limit;
  let max = [0, ""];
  for(let i = start; i>limit/2; i-=2){
    const chainLengthI = collatzCount(i);
    if(max[0] < chainLengthI) max = [chainLengthI, i];
  }
  return max[1];
}

function collatzCount(n) {
  let count = 1;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      count++;
    } else {
      n = 3 * n + 1;
      count++;
    }
  }
  return count
}

console.log(longestCollatzSequence(100000));
