import { Book } from '../model/Book';
import { Author } from '../model/Author';
import { Member } from '../model/Member';

export class LibraryService {
  private books: Book[] = [];
  private authors: Author[] = [];
  private members: Member[] = [];

  // Add a new book
  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added successfully!`);
  }

  // List all books
  listBooks(): void {
    if (this.books.length === 0) {
      console.log("No books found.");
    } else {
      console.log("Books in Library:");
      this.books.forEach(book => {
        console.log(`ID: ${book.book_id}, Title: ${book.title}, Author: ${book.author}, Available: ${book.available}`);
      });
    }
  }

  // Add a new author
  addAuthor(author: Author): void {
    this.authors.push(author);
    console.log(`Author "${author.name}" added successfully!`);
  }

  // List all authors
  listAuthors(): void {
    if (this.authors.length === 0) {
      console.log("No authors found.");
    } else {
      console.log("Authors in Library:");
      this.authors.forEach(author => {
        console.log(`ID: ${author.author_id}, Name: ${author.name}, Books: ${author.books.join(", ")}`);
      });
    }
  }

  // Add a new member
  addMember(member: Member): void {
    this.members.push(member);
    console.log(`Member "${member.name}" added successfully!`);
  }

  // List all members
  listMembers(): void {
    if (this.members.length === 0) {
      console.log("No members found.");
    } else {
      console.log("Library Members:");
      this.members.forEach(member => {
        console.log(`ID: ${member.member_id}, Name: ${member.name}, Borrowed Books: ${member.borrowed_books.join(", ")}`);
      });
    }
  }
}
