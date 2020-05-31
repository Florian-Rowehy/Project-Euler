function latticePaths(gridSize) {
  //array initialisation;
  const arr = [];
  for(let i=0; i<gridSize+1; i++){
      arr.push(new Array(gridSize+1).fill(1))
  }
  
  //calculation
  for (let i = 0; i < gridSize+1; i++) {
    for (let j = 0; j < gridSize+1; j++) {
      if (i === 0 || j === 0) continue;
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[gridSize][gridSize];
}

console.log(latticePaths(20));
