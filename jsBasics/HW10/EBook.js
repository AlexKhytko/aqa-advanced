import { Book } from './Book.js';

export class EBook extends Book {
    constructor(name, author, year, publication) {
        super(name, author, year); // Виклик конструктора батьківського класу
        this._publication = publication; // Зберігаємо публікацію
    }

    printInfo() {
        console.log(this.name, this.author, this._publication, this.year);
    }

    get publication() {
        return this._publication; // Доступ до публікації
    }

    set publication(publicationEBook) {
        this._publication = publicationEBook; // Зберігаємо публікацію
    }

    static fromBook(book, format) {
        return new EBook(book.name, book.author, book.year, format); // Використовуємо назву, автора, рік з класу Book
    }
}
