type CallBack = (par: any) => void

const myDecor = (cb: CallBack, time: number): CallBack => {
  return (...params) => {
    setTimeout(() => cb(...params), time)
  }
}

const myFooo = (a, b, c) => {
  console.log(a + b + c)
}

const done = myDecor(myFooo, 3000)

done(111, 777, 5)