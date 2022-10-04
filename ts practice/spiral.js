function spiral(h, w) {

  result = []
  for (i = 0; i < h; i++) {
    result.push([])
  }

  const height = [0, h - 1]
  const width = [0, w - 1]
  let line = 1;

  function moveRowRight() {
    if (line > h * w) {
      return
    }

    for (let i = width[0]; i <= width[1]; i++) {
      result[height[0]][i] = line
      line++
    }

    height[0] += 1
    moveColumnDown()
  }

  function moveColumnDown() {
    if (line > h * w) {
      return
    }

    for (let i = height[0]; i <= height[1]; i++) {
      result[i][width[1]] = line
      line++
    }

    width[1] -= 1
    moveRowLeft()
  }

  function moveRowLeft() {
    if (line > h * w) {
      return
    }

    for (let i = width[1]; i >= width[0]; i--) {
      result[height[1]][i] = line
      line++
    }

    height[1] -= 1
    moveColumnUp()
  }

  function moveColumnUp() {
    if (line > h * w) {
      return
    }

    for (let i = height[1]; i >= height[0]; i--) {
      result[i][width[0]] = line
      line++
    }

    width[0] += 1
    moveRowRight()
  }

  moveRowRight()

  return result
}

console.log(spiral(13, 6))