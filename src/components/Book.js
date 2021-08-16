import React from 'react';
import PropTypes from 'prop-types';
import {camelCase} from 'lodash';
import {update} from '../api/BooksAPI';

function Book(props) {
  const book = props.book;

  if (!book.hasOwnProperty('imageLinks')) {
    book.imageLinks = {smallThumbnail: ''};
  }

  if (!book.hasOwnProperty('authors')) {
    book.authors = [];
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${book.imageLinks.smallThumbnail.replace('http://', 'https://')})`
          }}></div>

        <div className="book-shelf-changer">
          <select value={book.shelf || 'none'} onChange={(event) => update(book, event.target.value).then(props.updateBooks(book, event.target.value))}>
            <option value="move" disabled={true}>
              Move to...
            </option>
            {['Currently Reading', 'Want to Read', 'Read', 'None'].map((optionTitle) => (
              <option key={camelCase(optionTitle)} value={camelCase(optionTitle)}>
                {optionTitle}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="book-title">{book.title}</div>

      <div className="book-authors">
        {book.authors.map((author) => (
          <span key={book.authors.indexOf(author)}>
            {author}
            <br />
          </span>
        ))}
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBooks: PropTypes.func.isRequired
};

export default Book;
