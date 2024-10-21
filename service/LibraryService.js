"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryService = void 0;
var LibraryService = /** @class */ (function () {
    function LibraryService() {
        this.books = [];
        this.authors = [];
        this.members = [];
    }
    // Add a new book
    LibraryService.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Book \"".concat(book.title, "\" added successfully!"));
    };
    // List all books
    LibraryService.prototype.listBooks = function () {
        if (this.books.length === 0) {
            console.log("No books found.");
        }
        else {
            console.log("Books in Library:");
            this.books.forEach(function (book) {
                console.log("ID: ".concat(book.book_id, ", Title: ").concat(book.title, ", Author: ").concat(book.author, ", Available: ").concat(book.available));
            });
        }
    };
    // Add a new author
    LibraryService.prototype.addAuthor = function (author) {
        this.authors.push(author);
        console.log("Author \"".concat(author.name, "\" added successfully!"));
    };
    // List all authors
    LibraryService.prototype.listAuthors = function () {
        if (this.authors.length === 0) {
            console.log("No authors found.");
        }
        else {
            console.log("Authors in Library:");
            this.authors.forEach(function (author) {
                console.log("ID: ".concat(author.author_id, ", Name: ").concat(author.name, ", Books: ").concat(author.books.join(", ")));
            });
        }
    };
    // Add a new member
    LibraryService.prototype.addMember = function (member) {
        this.members.push(member);
        console.log("Member \"".concat(member.name, "\" added successfully!"));
    };
    // List all members
    LibraryService.prototype.listMembers = function () {
        if (this.members.length === 0) {
            console.log("No members found.");
        }
        else {
            console.log("Library Members:");
            this.members.forEach(function (member) {
                console.log("ID: ".concat(member.member_id, ", Name: ").concat(member.name, ", Borrowed Books: ").concat(member.borrowed_books.join(", ")));
            });
        }
    };
    return LibraryService;
}());
exports.LibraryService = LibraryService;
