function largestPalindromeProduct(n) {
  const max = +"9".repeat(n);
  const arr = [];
  for (let i = max; i > 1; i--) {
    for (let j = max; j > 1; j--) {
      const product = i * j;
      if (isPalindr(product)) {
        arr.push(product);
      }
    }
  }
  return arr.sort((a,b) => b-a)[0]
}

function isPalindr(val) {
  const str = String(val);
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 -i]) {
      return false;
    }
  }
  return true;
}

console.log(largestPalindromeProduct(3));
