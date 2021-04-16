/*
    Using names, an array defined in the background containing over five-thousand first names, begin by sorting it into alphabetical order. 
    
    Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

    For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
    
    So, COLIN would obtain a score of 938 × 53 = 49714.

    What is the total of all the name scores in the array?
*/

const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

function namesScores(arr) {
    return mergeSort(arr, 0, arr.length-1).reduce((a, b, i) => {
        return a + convertStrToAlphabeticValue(b) * (i+1)
    }, 0);
}

function convertStrToAlphabeticValue(str) {
    const CODE_POINT_A = 'A'.codePointAt(0);
    let value = 0;
    for (let i=0; i<str.length; i++) {
        value += str.codePointAt(i) - CODE_POINT_A + 1;
    }
    return value;
}

function mergeArr(arr, start, middle, end) {
    const arr1 = [];
    for (let i=0; i<middle-start+1; i++) {
        arr1[i] = arr[start+i];
    }
    let pointer1 = 0;

    const arr2 = [];
    for (let i=0; i<end-middle; i++) {
        arr2[i] = arr[middle+i+1];
    }
    let pointer2 = 0;

    for (let i=start; i<end+1; i++ ) {
        if (arr1[pointer1] < arr2[pointer2] || pointer2 >= arr2.length) {
            arr[i] = arr1[pointer1];
            pointer1++;
        } else {
            arr[i] = arr2[pointer2];
            pointer2++;
        }
    }
}

function mergeSort(arr, start, end) {
    if (start < end) {
        let middle = Math.floor((start + end)/2);
        mergeSort(arr, start, middle);
        mergeSort(arr, middle+1, end);
        mergeArr(arr, start, middle, end);
    }
    return arr;
}

console.log(namesScores(test2));
