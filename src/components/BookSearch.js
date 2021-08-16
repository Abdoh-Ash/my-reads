import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from './Shelf';
import {debounce} from 'lodash';
import {search} from '../api/BooksAPI';

class BookSearch extends React.Component {
  state = {
    query: '',
    results: []
  };

  updateResults() {
    const books = this.props.books,
      query = this.state.query.trim();
    if (query) {
      search(query, 20).then((results) => {
        if (results instanceof Array) {
          results.forEach((result) =>
            books.forEach((book) => {
              if (book.id === result.id) {
                result.shelf = book.shelf;
              }
            })
          );
          this.setState({results: results});
        } else {
          this.setState({results: []});
        }
      });
    } else {
      this.setState({results: []});
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              autoFocus={true}
              onChange={(event) => this.setState({query: event.target.value}, debounce(this.updateResults, 300))}
            />
          </div>
        </div>

        <div className="search-books-results">
          {this.state.query ? (
            this.state.results.length ? (
              <ol className="books-grid">
                <Shelf title="Results" books={this.state.results} updateBooks={this.props.updateBooks} />
              </ol>
            ) : (
              <em>{'No results found!'}</em>
            )
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired
};

export default BookSearch;
