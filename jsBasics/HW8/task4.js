// Завдання 4: Відбір парних чисел
// Вам потрібно створити програму, яка відфільтровує парні числа з масиву.
// Ось кроки, які вам потрібно виконати:
// Створіть масив чисел, наприклад, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Cтворіть новий масив, який міститиме лише парні числа.
// Виведіть отриманий масив парних чисел на консоль.

const numbers = [7, 2, 3, 4, 5, 8, 12, 4, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log("В массиве " + numbers);
console.log("Количество чисел в массиве: " + numbers.length);

const evenNumbers = numbers.filter((number) => number % 2 == 0);
console.log("Количество четных чисел : " + evenNumbers.length);
console.log(evenNumbers);

const oddNumbers = numbers.filter((number) => number % 2 != 0);
console.log("Количество нечетных чисел : " + oddNumbers.length);
console.log(oddNumbers);


