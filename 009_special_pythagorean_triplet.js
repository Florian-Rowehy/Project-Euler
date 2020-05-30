function specialPythagoreanTriplet(n) {
  for(let i = 2; i<n/2; i++){
      for(let j = i+1; j<n/2; j++){
          if(i*i + j*j === (n-i-j)**2){ 
              return i*j*(n-i-j)}
      }
  }
}

console.log(specialPythagoreanTriplet(1000));



/* 
   a2 + b2 = c2 with a<b;
   a+b+c=n

   c = n-a-b
   c2 = (n-a-b)2
   a2+b2=(n-a-b)2 

   a2+b2=n2+a2+b2 -2an-2bn+ab
   0=n2-2an-2bn+ab
   n2=2an+2bn-ab
   n=2a+2b-ab/n
   n/2=a+b-ab/2n

   */
