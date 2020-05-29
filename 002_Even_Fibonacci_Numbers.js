function fiboEvenSum(n) {
    let a = 1;
    let b = 2;
    let sum = 2;
    while(true){
        a = a + b;
        if(a>n) break;
        if(a % 2 === 0) sum += a;
        b = a + b;
        if(b > n) break;
        if(b % 2 === 0) sum+= b;
    }
    return sum;
  }
  
  console.log(fiboEvenSum(100000));