export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    printInfo() {
        console.log(this._name, this._author, this._year);
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set name(nameBook) {
        this._name = nameBook; // Можна додати валідацію, якщо потрібно
    }

    set author(authorBook) {
        const regex = /^[а-яА-ЯёЁ\s]+$/; // Регулярне вираження для кирилиці
        if (typeof authorBook !== 'string' || !regex.test(authorBook.trim())) {
            throw new Error("Автор має бути на кирилиці та не може бути пустим.");
        }
        this._author = authorBook.trim(); // Зберігаємо без зайвих пробілів
    }

    set year(yearBook) {
        if (yearBook > 2024) {
            throw new Error("Рік не може бути більшим за 2024.");
        }
        this._year = yearBook; // Можна додати валідацію, якщо потрібно
    }

    static getOldestBook(books) {
        return books.reduce((oldest, current) => {
            return (current.year < oldest.year) ? current : oldest;
        });
    }
}
