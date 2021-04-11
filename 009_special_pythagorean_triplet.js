/*
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a2 + b2 = c2
  For example, 32 + 42 = 9 + 16 = 25 = 52.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
*/

function specialPythagoreanTriplet(n) {
  for(let a=1; a<n/2; a++){
    for(let b=a+1; b<n/2; b++){
      let c = n-a-b;
      if (a*a + b*b === c*c) 
          return a*b*c}
  }
}

console.log(specialPythagoreanTriplet(1000));

/* 
  a2 + b2 = c2 with a<b;
  a+b+c=n
  c = n-a-b
*/
