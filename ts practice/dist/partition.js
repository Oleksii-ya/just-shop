// You are given a certain integer, n, n > 0. You have to search the partition or partitions, of n, with maximum product value.
// Partition                 Product
// [8]                          8
// [7, 1]                       7
// [6, 2]                      12
// [6, 1, 1]                    6
// [5, 3]                      15
// [5, 2, 1]                   10
// [5, 1, 1, 1]                 5
// [4, 4]                      16
// [4, 3, 1]                   12
// [4, 2, 2]                   16
// [4, 2, 1, 1]                 8
// [4, 1, 1, 1, 1]              4
// [3, 3, 2]                   18   <---- partition with maximum product value
// [3, 3, 1, 1]                 9
// [3, 2, 2, 1]                12
// [3, 2, 1, 1, 1]              6
// [3, 1, 1, 1, 1, 1]           3
// [2, 2, 2, 2]                16
// [2, 2, 2, 1, 1]              8
// [2, 2, 1, 1, 1, 1]           4
// [2, 1, 1, 1, 1, 1, 1]        2
// [1, 1, 1, 1, 1, 1, 1, 1]     1
// Example (input -> output)
// 8 -> [[3, 3, 2], 18]
// If there are more than one partition with maximum product value, the function should output the partitions in a length sorted way.
// Example (input -> output)
// 10 --> [[4, 3, 3], [3, 3, 2, 2], 36]
function findPartition(n) {
    if (n === 1) {
        return [[1], 1];
    }
    let arr = [n - 1, 1];
    const resultObj = { [n]: [[n]] };
    function addToResultObj(arr) {
        let key = arr.reduce((prev, item) => {
            return prev * item;
        }, 1);
        if (key in resultObj) {
            resultObj[key].push([...arr]);
            return;
        }
        resultObj[key] = [[...arr]];
    }
    while (arr.length !== n) {
        addToResultObj(arr);
        if (arr[1] === 1) {
            const val = arr[0] - 1;
            const aquntity = Math.floor(n / val);
            arr = new Array(aquntity).fill(val);
            if (n % val) {
                arr.push(n - arr.length * val);
            }
            continue;
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] > 1) {
                arr[i] -= 1;
                if (i === arr.length - 1 || arr[i] === 1) {
                    arr.push(1);
                    break;
                }
                arr[i + 1] += 1;
                break;
            }
        }
    }
    const maxValue = Object.keys(resultObj).reduce((prev, item) => {
        return +prev > +item ? prev : item;
    }, 0);
    return [...resultObj[maxValue], +maxValue];
}
console.log(findPartition(8));
