/*
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
  const maxNb = +"9".repeat(n);
  let largestPalindrome = 9;
  for (let i = maxNb; i > 1; i--) {
    for (let j = i; j >= 1; j--) {
      let product = i * j;
      if (product > largestPalindrome && isPalindrome(product)) {
        largestPalindrome = product;
      }
    }
  }
  return largestPalindrome;
}

function isPalindrome(val) {
  const str = val.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 -i]) {
      return false;
    }
  }
  return true;
}

console.log(largestPalindromeProduct(2));
