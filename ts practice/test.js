// function compareNumeric(a, b) {

//   console.log(`a- ${a[0]}`, `b- ${b[0]}`)

//   if (a[0] > b[0]) return 1;
//   if (a[0] == b[0]) return 0;
//   if (a[0] < b[0]) return -1;
// }

let arr = [
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
];


arr.sort((a, b) => a[0] - b[0]);

console.log(arr)