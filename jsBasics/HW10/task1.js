import { Book } from './Book.js';
import { EBook } from './EBook.js';

// Використання класів
const books = [
    new Book("Книга 1", "Автор 1", 2020),
    new Book("Книга 2", "Автор 2", 2018),
    new Book("Книга 3", "Автор 3", 2010),
    new EBook("Електронна Книга 1", "Автор 6", 2021, "PDF"),
    new EBook("Електронна Книга 2", "Автор 4", 2015, "EPUB"),
    new EBook("Електронна Книга 3", "Автор 5", 2011, "REW")
];

// Знайти найдавнішу книгу
const oldestBook = Book.getOldestBook(books);
console.log(`Найдавніша книга: ${oldestBook.name}, ${oldestBook.author}, ${oldestBook.year}`);

// Створити екземпляр EBook з класу Book
const bookInstance = new Book("Книга 3", "Автор 5", 2019);
const ebookInstance = EBook.fromBook(bookInstance, "MOBI");
console.log(`EBook: ${ebookInstance.name}, ${ebookInstance.author}, ${ebookInstance.year}, ${ebookInstance.publication}`);
