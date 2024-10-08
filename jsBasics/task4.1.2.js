//Створіть дві змінні, які містять імена двох осіб. 
//Використовуючи конкатенацію рядків, створіть новий рядок,
 //який містить вітання для обох осіб. Виведіть результат 
 //в консоль. Потім використайте шаблонний рядок для 
 //створення того ж вітання. Виведіть результат в консоль.

let name1 = "Arnold";
let name2 = "Rocky";

let nameFriends = name1 + " and " + name2;
//console.log(nameFriends);

let congratulation = `Dear ${nameFriends}. Take my congratulations on your wedding day. Wish ${name1} be happy and ${name2} be careful.`;
console.log(congratulation);