// Завдання 5: Об'єднання масивів
// Вам потрібно створити програму, яка об'єднає два масиви в один
// Ось кроки, які вам потрібно виконати:
// Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
// Створіть новий масив, який містить всі елементи з обох вихідних масивів.
// Виведіть отриманий об'єднаний масив на консоль.

const firstArray = [7, 2, 3, 4, 5, 8, 12, 4, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const secondArray = [2, -5, 0, 7, -3, 0, 10, -8];

const concatenatedArray = firstArray.concat(secondArray);
console.log(concatenatedArray);