// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
function changeUpper(str) {
    return str.split(' ').map((item) => {
        let result = '';
        let doit = true;
        for (let char of item) {
            doit ? result += char.toUpperCase() : result += char;
            doit = !doit;
        }
        return result;
    }).join(' ');
}
console.log(changeUpper("Weird string case"));
