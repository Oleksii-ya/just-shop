// Your task is to create a magic square for any positive odd integer N. 
// The magic square contains the integers from 1 to N * N, arranged in an NxN matrix, such that the columns, 
// rows and both main diagonals add up to the same number.
// Note: use have to use the Siamese method for this task.
// Examples:
// n = 3
// result = [
//   [8, 1, 6],
//   [3, 5, 7],
//   [4, 9, 2]
// ]
// n = 5
// result = [
//   [17, 24,  1,  8, 15],
//   [23,  5,  7, 14, 16],
//   [ 4,  6, 13, 20, 22],
//   [10, 12, 19, 21,  3],
//   [11, 18, 25,  2,  9]
// ]
function doSiamese(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    let x = (n - 1) / 2;
    let y = 0;
    for (let i = 1; i <= n * n; i++) {
        result[y][x] = i;
        const xTemp = x;
        const yTemp = y;
        y > 0 ? y -= 1 : y = n - 1;
        x < n - 1 ? x += 1 : x = 0;
        if (typeof result[y][x] === 'number') {
            x = xTemp;
            y = yTemp + 1;
        }
    }
    return result;
}
console.log(doSiamese(5));
