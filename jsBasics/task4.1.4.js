//Завдання 4: Обчислення площі та об'єму
//Завдання 4.1
//π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
//Створіть змінну radius і присвойте їй числове значення радіуса кола.
//Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

let pi = Math.PI;
let radius = 12;
let circle = pi * (radius * radius);
console.log(circle)

let length = (radius / 3) * 2;
let wight = (length / 4)* 2;
let square = length * wight;
console.log(square);

let height = 6;
let volume = pi * Math.pow(radius, 2) * height;
console.log((volume).toFixed(2));



