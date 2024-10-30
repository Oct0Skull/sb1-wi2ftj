import { Book } from '../types/Book';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0743273565',
    available: true,
    coverUrl: 'https://example.com/gatsby.jpg',
    description: 'A story of decadence and excess.',
    category: 'Fiction'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '978-0446310789',
    available: true,
    coverUrl: 'https://example.com/mockingbird.jpg',
    description: 'A classic of modern American literature.',
    category: 'Fiction'
  },
  {
    id: '3',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    isbn: '978-0132350884',
    available: false,
    coverUrl: 'https://example.com/cleancode.jpg',
    description: 'A handbook of agile software craftsmanship.',
    category: 'Technology'
  }
];