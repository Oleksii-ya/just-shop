const arr = [
    [5, 3, 6, 1],
    [5, 8, 7, 4],
    [1, 2, 4, 3],
    [3, 1, 2, 2]
];
function rotationMatrix(arr) {
    const side = arr.length;
    const result = [];
    for (let i = 0; i < side; i++) {
        for (let j = 0; j < side; j++) {
            if (i === 0) {
                result.push([]);
            }
            result[j][i] = arr[i][side - j - 1];
        }
    }
    return result;
}
console.table(rotationMatrix(arr));
