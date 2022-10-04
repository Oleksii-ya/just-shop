// input(16 ) -->  1 + 6 = output(7)
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function sumSpecial(num) {
    let bufer = 0;
    let numStr = num.toString();
    while (numStr.length > 1) {
        for (let item of numStr) {
            bufer += +item;
        }
        numStr = bufer.toString();
        bufer = 0;
    }
    return +numStr;
}
console.log(sumSpecial(493193));
