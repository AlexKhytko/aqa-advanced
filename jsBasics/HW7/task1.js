function handleNum (callEven, callOdd, num) {
    if (callEven(num)) {
        console.log(`The number is an even number: ${num}.`);
    } else if (callOdd(num)) {
        console.log(`The number is an odd number: ${num}.`);
    } 
}
function handleEven(num) {
        return num % 2 !== 0;
}
function handleOdd(num) {
        return num % 2 === 0;
    }
handleNum(handleEven, handleOdd, 2);
handleNum(handleEven, handleOdd, 3);


