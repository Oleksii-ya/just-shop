// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

function snail(array: number[][]): number[] {
  let params = {
    top: 0,
    bottom: array.length - 1,
    left: 0,
    right: array[0].length - 1
  }

  const result = []

  function goRight(params) {
    const { top, right, left } = params
    for (let i = left; i <= right; i++) {
      result.push(array[top][i])
    }
    params.top += 1
  }

  function goBottom(params) {
    const { top, bottom, right } = params
    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right])
    }
    params.right -= 1
  }

  function goLeft(params) {
    const { bottom, right, left } = params
    for (let i = right; i >= left; i--) {
      result.push(array[bottom][i])
    }
    params.bottom -= 1
  }

  function goTop(params) {
    const { bottom, top, left } = params
    for (let i = bottom; i >= top; i--) {
      result.push(array[i][left])
    }
    params.left += 1
  }

  function stop() {
    return result.length === array[0].length * array.length
  }

  while (!stop()) {
    goRight(params)
    if (stop()) { return result }
    goBottom(params)
    if (stop()) { return result }
    goLeft(params)
    if (stop()) { return result }
    goTop(params)
  }
  return result
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(snail(array))