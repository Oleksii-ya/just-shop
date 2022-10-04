const one = (cbRez) => {
  if (!cbRez) {
    return 1
  }
  return cbRez(1)
}
const two = (cbRez) => {
  if (!cbRez) {
    return 2
  }
  return cbRez(2)
}

const plus = (val) => { return (val2) => val + val2 }

console.log(one(plus(two())))