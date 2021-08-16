import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from './Shelf';
import {camelCase} from 'lodash';

function BookList(props) {
  const books = props.books;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          {['Currently Reading', 'Want to Read', 'Read'].map((shelfTitle) => (
            <Shelf
              key={camelCase(shelfTitle)}
              title={shelfTitle}
              books={books.filter((book) => book.shelf === camelCase(shelfTitle))}
              updateBooks={props.updateBooks}
            />
          ))}
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Search for a book</Link>
      </div>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired
};

export default BookList;
