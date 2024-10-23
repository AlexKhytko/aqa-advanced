// Завдання 6: Сортування масивів
// У вас є вихідний масив
// сonst numbersList = [1,10,14,2,4,5,43,34]
// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
// Виведіть обидва масиви в консоль

const numbersList = [1,10,14,2,4,5,43,34];
console.log(numbersList);

const numbersListUp = numbersList.slice();
numbersListUp.sort((a,b) => a - b);
console.log(numbersListUp);

const numbersListDown = numbersList.slice();
numbersListDown.sort((a,b) => b - a);
console.log(numbersListDown);

