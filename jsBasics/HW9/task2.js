// Завдання 2
// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const bookCard = {
    title: "O Alquimista",
    author: "Paulo Coelho",
    year: 1988
}

const nameBook = [bookCard.title, bookCard.author, bookCard.year];
console.log( nameBook);

const {title, author} = bookCard;
console.log("Title: ", bookCard.title, "Authur: ", bookCard.author);

