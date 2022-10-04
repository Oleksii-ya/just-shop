// Help the frog to find a way to freedom
// You have an array of integers and have a frog at the first position

// [Frog, int, int, int, ..., int]

// The integer itself may tell you the length and the direction of the jump

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.

// Return -1 if Frog can't jump out of the array

// Example:
// array = [1, 2, 1, 5]; 
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)

const helpFrog = (arr: number[]): number => {
  let position = 0;
  let count = 0
  for (const move of arr) {
    position += arr[position];
    if (arr[position] === 0) {
        return -1;
    }
    ++count;
    if (!arr[position]) {
        return count;
    }
  }
  return -1
}

console.log(helpFrog([1, 2, 2, -1]))