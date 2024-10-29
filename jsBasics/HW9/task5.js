// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

 const users = [
{nameUser: "John", surname: "Malkovich", phone: "92161646", email: "sdhsdgfh@mgs.com", city: "Kyiv"},
{nameUser: "Bruce", surname: "Fucker", phone: "7453753", email: "rturturt@mgs.com", city: "Dnipro"},
{nameUser: "Mike", surname: "Rambo", phone: "8877877668", email: "eryeye@mgs.com", city: "Uman"},
];

  
  for (const { nameUser, surname, city } of users) {
    console.log(`${nameUser} ${surname}  is from ${city}`);
  }
  for (const {  email, nameUser } of users) {
    console.log(`${nameUser} has email:  ${email}`);
  }
  for (const { phone, surname } of users) {
    console.log(`${surname} has phone number: ${phone}`);
  }

