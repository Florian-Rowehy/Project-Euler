/*
  The following iterative sequence is defined for the set of positive integers:

  n → n/2 (n is even)
  n → 3n + 1 (n is odd)
  Using the rule above and starting with 13, we generate the following sequence:

  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
  It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

  Which starting number, under the given limit, produces the longest chain?

  Note: Once the chain starts the terms are allowed to go above one million.
*/

function longestCollatzSequence(limit) {
  //since even numbers start by a division, only take uneven number
  const start = limit % 2 === 0 ? limit-1 : limit;
  let maxSequenceLength = 0;
  let nb = limit;
  for(let i = start; i>limit/2; i-=2){
    const sequenceLength = collatzCount(i);

    if (maxSequenceLength < sequenceLength) {
      maxSequenceLength = sequenceLength;
      nb = i;
    }
  }
  return nb;
}

function collatzCount(n) {
  let count = 0;
  while (n > 1) {
    count++;
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
  return count
}

console.log(longestCollatzSequence(100000));
