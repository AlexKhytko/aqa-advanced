/*function handleNum (callEven, callOdd, num) {
    num.forEach(num => {     
    if (callEven(num)) {
        console.log(`The number ${num} is an even number`);
    } else if (callOdd(num)) {
        console.log(`The number ${num} is an odd number`);
    } 
})
};
function handleEven(num) {
        return num % 2 !== 0;
}
function handleOdd(num) {
        return num % 2 === 0;
    }

const arrayNum = [4,5,6,2,8,1,5,4,2,5,4,8,6,3,9,7,5,8,7]
handleNum(handleEven, handleOdd, arrayNum);*/

// function makeCounter(num) {
//     let numBig = num + 5;
//     return numBig
    
//     }
//     console.log(makeCounter(2));
//     export default makeCounter;
  // function makeCounter(num) {
    //     let count = num; // початкове значення
    
    //     return function() {
    //         count += 5; // збільшуємо на 5
    //         return count; // повертаємо нове значення
    //     };
    // }
    
    // // Використання
    // const counter = makeCounter(9); // починаємо з 0
    
    // console.log(counter()); 
    // console.log(counter()); 
    // console.log(counter());
    
    // export default makeCounter;

// function makeCounter(num) {
//     let plusFive = num;
//    return function tre() {
//         plusFive += 5;
//         return plusFive;};
// }
// const plus = makeCounter(4);
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());  
//     export default makeCounter;
 

function* fibonacciGenerator() {
    let a = 0, b = 1;
    yield a; // перше число Фібоначчі
    yield b; // друге число Фібоначчі

    while (true) {
        const next = a + b; // наступне число Фібоначчі
        yield next; // генеруємо наступне число
        a = b; // зсув для наступного обчислення
        b = next; // оновлюємо b
    }
    return function(){
     return  fibonacciGenerator();
 };
}
const fibGen = fibonacciGenerator();

// Перевірка, чи функція генерує правильні числа Фібоначчі
const expectedValues = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

for (let i = 0; i < expectedValues.length; i++) {
    const result = fibGen.next().value;
    console.log(result === expectedValues[i]); // має повернути true для кожного числа
}
export default fibonacciGenerator;


