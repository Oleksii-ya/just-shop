// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
// "The quick brown fox jumps over the lazy dog." === true
// "This is not a pangram." === false


const isPangram = (str: string): boolean => {
  const strLower = str.toLowerCase()

  return Object.values(strLower.split('').reduce((prev, current) => {
    if (current.match(/[a-z]/i)) {
      prev[current] ? prev[current] += 1 : prev[current] = 1
    }
    return prev
  }, {})).length === 26

}


const isPangram2 = (str: string): boolean => {
  const strLower = str.toLowerCase()

  const resArr = Object.values(strLower.split('').reduce((prev, current) => {
    if (current.match(/[a-z]/i)) {
      prev[current] ? prev[current] += 1 : prev[current] = 1
    }
    return prev
  }, {}))

  if (resArr.length !== 26) {
    return false
  }
  for (let item of resArr) {
    if (item < 2) {
      return false
    }
  }
  return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))