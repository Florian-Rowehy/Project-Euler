function sumSquareDifference(n){
    let sumSqr = 1;
    let sqrSum = 1;
    for(let i =2; i<=n; i++){
        sumSqr += i;
        sqrSum += i * i;
    }
    return sumSqr * sumSqr - sqrSum
}

console.log(sumSquareDifference(10));