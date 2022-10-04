// Свертка. Используйте метод reduce в комбинации с concat 
// для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
// var arrays = [[1, [2, [3]], 4], [5, 6], [7]];
// Ваш код 
// → [1, 2, 3, 4, 5, 6]

const arrays = [[1, [2, [3]], 4], [5, 6], [7]];

type myFoo = (arr: any[]) => any[]

const convolution1: myFoo = (arr: any[]) => {
  const result: any[] = []

  for (let item of arr.toString()) {
    if (item !== ',') {
      result.push(+item)
    }
  }
  return result
}

const convolution2: myFoo = (arr: any[]) => {
  return arr.toString().split(',').reduce(
    (prev, current) => {
      prev.push(+current)
      return prev
    }, []
  )
}

const convolution3: myFoo = (arr: any[]) => {
  return arr.toString().split(',').map((item) => +item)
}

const convolution4: myFoo = (arr: any[]) => {
  const result = []

  const break_array = (arr: any[]): void => {
    for (let item of arr) {
      if (!Array.isArray(item)) {
        result.push(item)
      }
      break_array(item)
    }
  }

  break_array(arr)
  return result
}

console.log(convolution4(arrays))