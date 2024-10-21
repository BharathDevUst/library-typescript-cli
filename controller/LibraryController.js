"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryController = LibraryController;
// src/cli/MainMenu.ts
var inquirer_1 = require("inquirer");
var LibraryService_1 = require("../service/LibraryService");
var libraryService = new LibraryService_1.LibraryService();
function LibraryController() {
    return __awaiter(this, void 0, void 0, function () {
        var action, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: 'list',
                            name: 'action',
                            message: 'What would you like to do?',
                            choices: ['Add Book', 'List Books', 'Add Author', 'List Authors', 'Add Member', 'List Members', 'Exit'],
                        },
                    ])];
                case 1:
                    action = (_b.sent()).action;
                    _a = action;
                    switch (_a) {
                        case 'Add Book': return [3 /*break*/, 2];
                        case 'List Books': return [3 /*break*/, 4];
                        case 'Add Author': return [3 /*break*/, 5];
                        case 'List Authors': return [3 /*break*/, 7];
                        case 'Add Member': return [3 /*break*/, 8];
                        case 'List Members': return [3 /*break*/, 10];
                        case 'Exit': return [3 /*break*/, 11];
                    }
                    return [3 /*break*/, 12];
                case 2: return [4 /*yield*/, addBook()];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 4:
                    libraryService.listBooks();
                    return [3 /*break*/, 12];
                case 5: return [4 /*yield*/, addAuthor()];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 7:
                    libraryService.listAuthors();
                    return [3 /*break*/, 12];
                case 8: return [4 /*yield*/, addMember()];
                case 9:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 10:
                    libraryService.listMembers();
                    return [3 /*break*/, 12];
                case 11:
                    console.log('Goodbye!');
                    return [2 /*return*/];
                case 12: return [4 /*yield*/, LibraryController()];
                case 13:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// Prompt to add a new book
function addBook() {
    return __awaiter(this, void 0, void 0, function () {
        var book;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: 'input',
                            name: 'book_id',
                            message: 'Enter Book ID:',
                            validate: function (input) { return (!isNaN(parseInt(input)) ? true : 'Please enter a valid number.'); },
                            filter: function (input) { return parseInt(input); },
                        },
                        {
                            type: 'input',
                            name: 'title',
                            message: 'Enter Book Title:',
                            validate: function (input) { return (input.trim() !== '' ? true : 'Book title cannot be empty.'); },
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
                    ])];
                case 1:
                    book = _a.sent();
                    libraryService.addBook(book);
                    return [2 /*return*/];
            }
        });
    });
}
// Prompt to add a new author
function addAuthor() {
    return __awaiter(this, void 0, void 0, function () {
        var author;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: 'input',
                            name: 'author_id',
                            message: 'Enter Author ID:',
                            validate: function (input) { return (!isNaN(parseInt(input)) ? true : 'Please enter a valid number.'); },
                            filter: function (input) { return parseInt(input); },
                        },
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Enter Author Name:',
                            validate: function (input) { return (input.trim() !== '' ? true : 'Author name cannot be empty.'); },
                        },
                        {
                            type: 'input',
                            name: 'books',
                            message: 'Enter Books (comma-separated):',
                            filter: function (input) { return input.split(',').map(function (book) { return book.trim(); }); },
                        },
                    ])];
                case 1:
                    author = _a.sent();
                    libraryService.addAuthor(author);
                    return [2 /*return*/];
            }
        });
    });
}
// Prompt to add a new library member
function addMember() {
    return __awaiter(this, void 0, void 0, function () {
        var member;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: 'input',
                            name: 'member_id',
                            message: 'Enter Member ID:',
                            validate: function (input) { return (!isNaN(parseInt(input)) ? true : 'Please enter a valid number.'); },
                            filter: function (input) { return parseInt(input); },
                        },
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Enter Member Name:',
                            validate: function (input) { return (input.trim() !== '' ? true : 'Member name cannot be empty.'); },
                        },
                        {
                            type: 'input',
                            name: 'borrowed_books',
                            message: 'Enter Borrowed Books (comma-separated):',
                            filter: function (input) { return input.split(',').map(function (book) { return book.trim(); }); },
                        },
                    ])];
                case 1:
                    member = _a.sent();
                    libraryService.addMember(member);
                    return [2 /*return*/];
            }
        });
    });
}
