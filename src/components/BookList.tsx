import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-nativescript';
import { books } from '../data/books';
import { Book } from '../types/Book';

type BookListProps = {
  navigation: any;
};

export function BookList({ navigation }: BookListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(text.toLowerCase()) ||
      book.author.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <flexboxLayout className="flex-col h-full bg-gray-100">
      <searchBar
        className="m-2"
        hint="Search books..."
        text={searchQuery}
        onTextChange={(args) => handleSearch(args.object.text)}
      />
      
      <scrollView className="flex-1">
        <stackLayout className="m-2">
          {filteredBooks.map((book) => (
            <gridLayout
              key={book.id}
              className="bg-white rounded-lg p-4 m-2 shadow-md"
              rows="auto, auto"
              columns="auto, *"
              onTap={() => navigation.navigate('BookDetail', { book })}
            >
              <image
                row={0}
                rowSpan={2}
                col={0}
                src={book.coverUrl}
                className="w-16 h-24 rounded"
              />
              <label
                row={0}
                col={1}
                className="text-lg font-bold ml-2"
                text={book.title}
              />
              <label
                row={1}
                col={1}
                className="text-sm text-gray-600 ml-2"
                text={book.author}
              />
            </gridLayout>
          ))}
        </stackLayout>
      </scrollView>
    </flexboxLayout>
  );
}