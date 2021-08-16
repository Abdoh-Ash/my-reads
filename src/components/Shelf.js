import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function Shelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <li key={book.id}>
              <Book book={book} updateBooks={props.updateBooks} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired
};

export default Shelf;
