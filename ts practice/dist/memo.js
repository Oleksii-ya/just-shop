// function memoized(function) => function // мемоизация
// Example: memoized(fibSeq)(100) doesn’t exceed maximum stack size
function memoized(foo) {
    const pastParams = { numberCalls: 0 };
    return function (...args) {
        const keyArguments = JSON.stringify(arguments);
        if (pastParams[keyArguments]) {
            return pastParams[keyArguments];
        }
        let result = foo(...args);
        pastParams.numberCalls += 1;
        pastParams[keyArguments] = result;
        return result;
    };
}
