/*
  Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

  a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner
  How many such routes are there through a given gridSize?
*/

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
