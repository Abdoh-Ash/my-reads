import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';
import {getAll} from './api/BooksAPI';
import './assets/style/App.css';

class BooksApp extends Component {
  state = {
    books: []
  };

  updateBooks = (book, shelf) => {
    if (this.state.books.map((item) => item.id).includes(book.id)) {
      this.setState((prevState) => {
        for (let item of prevState.books) {
          if (item.id === book.id) {
            item.shelf = shelf;
            break;
          }
        }
        return prevState;
      });
    } else {
      this.setState((prevState) => {
        book.shelf = shelf;
        prevState.books.push(Object.assign({}, book));
        return prevState;
      });
    }
  };

  componentDidMount() {
    getAll().then((books) => {
      this.setState({books: books});
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" exact={true} render={() => <BookList books={this.state.books} updateBooks={this.updateBooks} />} />
          <Route path="/search" exact={true} render={() => <BookSearch books={this.state.books} updateBooks={this.updateBooks} />} />
          <Route
            render={() => (
              <div style={{textAlign: 'center'}}>
                <h1>Error: 404</h1>
                <p>Page Not Found!</p>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
