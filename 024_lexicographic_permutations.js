/*
    A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. 
    If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. 
    The lexicographic permutations of 0, 1 and 2 are:

    012   021   102   120   201   210
    What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

function lexicographicPermutations(n) {
    const permutation0 = [0,1,2,3,4,5,6,7,8,9];
    for (let i = 0; i <n; i++) {
        permute(permutation0);
    }
    return permutation0.join('');
}

function permute(arr) {
    for (let i=arr.length-1; i > 0; i--) {
        if (arr[i] < arr[i+1]) {
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            return;
        }
    }
}

console.log(lexicographicPermutations(999999));
