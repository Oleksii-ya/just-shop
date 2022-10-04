const ar = [
    [5, 3, 6, 1, 8],
    [5, 8, 7, 4, 3],
    [1, 2, 4, 3, 5],
    [3, 1, 2, 2, 4],
    [7, 9, 3, 4, 1]
];
function makeCircles(arr) {
    const copyArr = arr.map((item) => [...item]);
    const circles = [];
    while (copyArr.length > 1) {
        const top = copyArr.shift();
        const right = [];
        const bottom = copyArr.pop().reverse();
        const left = [];
        for (let item of copyArr) {
            right.push(item.pop());
            left.unshift(item.shift());
        }
        circles.push([...top, ...right, ...bottom, ...left]);
    }
    return circles;
}
function moveCircles(circles) {
    circles.map((item, index) => {
        for (let i = 0; i < (index + 1) * item.length / 4; i++) {
            item.push(item.shift());
        }
    });
}
// const circles = makeCircles(ar);
// console.log(circles)
// moveCircles(circles)
// console.log(circles)
