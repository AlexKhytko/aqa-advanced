const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (const number of numbers) {
 }
console.log("Массив : " + numbers);

const positiveNumbers = numbers.filter((number) => number > positiveCount);
console.log("Количество положительных чисел в массиве: " + positiveNumbers.length);
console.log(positiveNumbers);

const negativeNumbers = numbers.filter((number) => number < negativeCount);
console.log("Количество отрицательных чисел в массиве: " + negativeNumbers.length);
console.log(negativeNumbers);

const zeroNumbers = numbers.filter((number) => number === zeroCount);
console.log("Количество нулевых значений в массиве: " + zeroNumbers.length)
console.log(zeroNumbers);

const arrayPlusOne = [];
for (let i = 0; i < numbers.length; i++) {
   arrayPlusOne.push(numbers[i] + 1);
}
console.log( "Элементы массива увеличенные на 1: " + arrayPlusOne);

  
