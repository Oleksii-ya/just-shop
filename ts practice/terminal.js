
// console.log(getMoney(2135)); 
// { 1000: 0, 500: 0, 100: 0, 50: 0, 30: 0 }

const types = [1000, 500, 100, 50, 30];

function getMoney(money, types) {
  const minType = Math.min(...types)
  const maxType = 100000
  const setTypes = {}

  for (val of types) {
    setTypes[val] = 0
  }

  if (money < minType || money > maxType) {
    return (`Please pass value in range ${minType}...${maxType}`)
  }

  if (types.includes(money)) {
    setTypes[money] = 1
    return setTypes
  }

  const minCoins = {}


  for (let sum = minType*2; sum <= money; sum++) {
    // default value
    
    for (const type of types) {

    }

  }

}


console.log(getMoney(155, types))
