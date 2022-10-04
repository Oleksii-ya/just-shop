// Description:
// Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.
// 
// Notes:
// Words are separated with spaces
// Each word will include at least 1 letter
// There will be no exclamation marks in the middle of a word
// 
// remove("Hi!") === "Hi"
// remove("!Hi! Hi!") === "!Hi! Hi"
// remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
// remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
const remove = (str) => {
    const arr = str.split(' ');
    return arr.map((item) => {
        const partArr = item.split('!');
        let ind = 0;
        // looking for the index of the term in the array
        while (true) {
            if (partArr[ind] !== '') {
                break;
            }
            ind++;
        }
        const leftExclamation = ind;
        const rightExclamation = partArr.length - 1 - leftExclamation;
        const minExclamation = Math.min(leftExclamation, rightExclamation);
        let exclamation = '';
        if (leftExclamation === 0 || rightExclamation === 0) {
            return partArr[ind];
        }
        for (let i = 0; i < minExclamation; i++) {
            exclamation += '!';
        }
        return exclamation + partArr[ind] + exclamation;
    }).join(' ');
};
console.log(remove("!!!!Hi!! !!!!Hi !Hi!!!"));
