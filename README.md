# My Reads

This is a web app built using ReactJS as a project for an online course at Udacity.

## Getting Started

Well, it is as simple as executing ```npm install``` and ```npm start``` commands through the terminal.
Then, the app will be hosted at http://localhost:3000/

## Features

- Book State Tracking
- Book State Management
- Book Search

## Usage

When you visit the link provided above in the *How to lunch the app?* section, you will be presented with a page that has three categories:

- **Currently Reading**, which displays the books marked as "Currently Reading"
- **Want to Read**, which displays the books marked as "Want to Read"
- **Read**, which displays the books marked as "Read"

You can change change the state of each book *i.e. the category it is placed under* by clicking on the downward facing arrowhead button at the bottom left corner of the book's thumbnail area, and changes will be reflected immediately.

You can also search for books to add to one of the three recognized shelves by clicking on the plus button at the bottom left corner of the page, you will be redirected to http://localhost:3000/search which will show a new UI which features a search bar for you to type your queries, any changes made to the search bar will be reflected immediately below it, and results will be shown if there are any matches, and a proper message will be displayed instead if there were no matches for your query.

Books displayed in the results section can be added to any of the three categories recognized in the main page by clicking on the downward facing arrowhead button at the bottom left corner of each book's thumbnail area, and changes will be reflected immediately, books that belong to no category are categorized as None.

With that being said, it should be also noted that in order to remove a book from the main page, the procedure would be as simple as setting its state to None.

## Authors

- **Abdulrahman Alkhateeb**

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE.md](LICENSE.md) file for details