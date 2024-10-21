import { LibraryController } from './controller/LibraryController';

async function runApp() {
  console.log('Welcome to the Library Management System!');
  await LibraryController();
}

runApp();
