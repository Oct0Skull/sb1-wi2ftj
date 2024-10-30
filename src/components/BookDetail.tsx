import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { Book } from '../types/Book';

type BookDetailProps = {
  route: {
    params: {
      book: Book;
    };
  };
};

export function BookDetail({ route }: BookDetailProps) {
  const { book } = route.params;

  return (
    <scrollView className="flex-1 bg-gray-100">
      <stackLayout className="p-4">
        <image
          src={book.coverUrl}
          className="w-48 h-72 rounded-lg self-center mb-4"
        />
        
        <label className="text-2xl font-bold mb-2" text={book.title} />
        <label className="text-lg text-gray-700 mb-4" text={`by ${book.author}`} />
        
        <gridLayout className="bg-white p-4 rounded-lg mb-4" rows="auto, auto" columns="auto, *">
          <label row={0} col={0} className="font-bold" text="ISBN:" />
          <label row={0} col={1} className="ml-2" text={book.isbn} />
          
          <label row={1} col={0} className="font-bold" text="Status:" />
          <label
            row={1}
            col={1}
            className={`ml-2 ${book.available ? 'text-green-600' : 'text-red-600'}`}
            text={book.available ? 'Available' : 'Checked Out'}
          />
        </gridLayout>
        
        <label className="font-bold mb-2" text="Description:" />
        <label className="text-gray-700" textWrap={true} text={book.description} />
      </stackLayout>
    </scrollView>
  );
}