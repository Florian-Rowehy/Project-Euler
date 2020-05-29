function smallestMult(n) {
  if (n < 5) return;
  const str = String(n);
  const add = 10 - str[str.length - 1];
  let start = add === 10 ? n : n + add;
  while (true) {
    if (start%3 === 0) {
      for (let i = n; i >= 3; i--) {
        if (i === 3) return start;
        if (start % i) break;
      }
    }
    start += 10;
  }
}

console.log(smallestMult(10));

