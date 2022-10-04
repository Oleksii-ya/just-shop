// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
function serchMissLetter(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].charCodeAt(0) !== arr[i + 1].charCodeAt(0) - 1) {
            return String.fromCharCode(arr[i].charCodeAt(0) + 1);
        }
    }
}
console.log(serchMissLetter(['a', 'b', 'c', 'd', 'f']));
