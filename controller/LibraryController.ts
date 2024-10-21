// src/cli/MainMenu.ts
import inquirer from 'inquirer';
import { LibraryService } from '../service/LibraryService';
import { Book } from '../model/Book';
import { Author } from '../model/Author';
import { Member } from '../model/Member';

const libraryService = new LibraryService();

export async function LibraryController(): Promise<void> {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['Add Book', 'List Books', 'Add Author', 'List Authors', 'Add Member', 'List Members', 'Exit'],
    },
  ]);

  switch (action) {
    case 'Add Book':
      await addBook();
      break;
    case 'List Books':
      libraryService.listBooks();
      break;
    case 'Add Author':
      await addAuthor();
      break;
    case 'List Authors':
      libraryService.listAuthors();
      break;
    case 'Add Member':
      await addMember();
      break;
    case 'List Members':
      libraryService.listMembers();
      break;
    case 'Exit':
      console.log('Goodbye!');
      return;
  }

  await LibraryController(); 
}

// Prompt to add a new book
async function addBook(): Promise<void> {
  const book: Book = await inquirer.prompt([
    {
      type: 'input',
      name: 'book_id',
      message: 'Enter Book ID:',
      validate: (input) => (!isNaN(parseInt(input)) ? true : 'Please enter a valid number.'),
      filter: (input) => parseInt(input),
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter Book Title:',
      validate: (input) => (input.trim() !== '' ? true : 'Book title cannot be empty.'),
    },
    {
      type: 'input',
      name: 'author',
      message: 'Enter Book Author:',
    },
    {
      type: 'confirm',
      name: 'available',
      message: 'Is the book available?',
      default: true,
    },
  ]);

  libraryService.addBook(book);
}

// Prompt to add a new author
async function addAuthor(): Promise<void> {
  const author: Author = await inquirer.prompt([
    {
      type: 'input',
      name: 'author_id',
      message: 'Enter Author ID:',
      validate: (input) => (!isNaN(parseInt(input)) ? true : 'Please enter a valid number.'),
      filter: (input) => parseInt(input),
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter Author Name:',
      validate: (input) => (input.trim() !== '' ? true : 'Author name cannot be empty.'),
    },
    {
      type: 'input',
      name: 'books',
      message: 'Enter Books (comma-separated):',
      filter: (input) => input.split(',').map(book => book.trim()),
    },
  ]);

  libraryService.addAuthor(author);
}

// Prompt to add a new library member
async function addMember(): Promise<void> {
  const member: Member = await inquirer.prompt([
    {
      type: 'input',
      name: 'member_id',
      message: 'Enter Member ID:',
      validate: (input) => (!isNaN(parseInt(input)) ? true : 'Please enter a valid number.'),
      filter: (input) => parseInt(input),
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter Member Name:',
      validate: (input) => (input.trim() !== '' ? true : 'Member name cannot be empty.'),
    },
    {
      type: 'input',
      name: 'borrowed_books',
      message: 'Enter Borrowed Books (comma-separated):',
      filter: (input) => input.split(',').map(book => book.trim()),
    },
  ]);

  libraryService.addMember(member);
}
