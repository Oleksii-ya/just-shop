// function fibSeq(n) => number - возвращает n-е число фибоначчи
// Example: fibSeq(8) returns 13

const fibSeq = (n: number): number => {
  let result: number = 1

  function add(one: number, two: number): void {
    n--
    if (n === 0) {
      return
    }
    result = one + two
    one = two
    two = result
    add(one, two)
  }
  add(0, 1)

  return result
}
console.log(fibSeq(8))


// Fibonacci number (Fibonacci sequence), named after mathematician Fibonacci, is a sequence of numbers that looks like this:
// 0, 1, 1, 2, 3, 5, 8, 13,...
// need no RangeError: Maximum call stack size exceeded

const fiboSeq = (n: number): number => {
  const resArr = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    resArr.push(resArr[i] + resArr[i + 1]);
  }
  return resArr[n];
}

console.log(fiboSeq(8))