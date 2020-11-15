import React, { useState } from 'react';
// import { Container } from 'react-bootstrap';

// API: https://anapioficeandfire.com/

const Seven = () => {
  const [books, setBooks] = useState(null);
  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

  function fetchBooks() {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data)
        setBooks(data);
      });
  }

  return (
    <div className='Api'>
      <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
        Day 7: Fetch and Display from an API
      </h3>

      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div>
        <button className='fetch-button' onClick={fetchBooks}>
          Fetch Data
        </button>
        <br />
      </div>

      <div className='books'>
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(', ');

            return (
              <div className='book' key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className='details'>
                  <p>👨: {authors}</p>
                  <p>📖: {book.numberOfPages} pages</p>
                  <p>🏘️: {book.country}</p>
                  <p>⏰: {cleanedDate}</p>
                </div>
              </div>
            );
          })}
      </div>

      <p>
        See the sandbox here&nbsp;
        <a
          href='https://codesandbox.io/s/r094p6ylkq%5C'
          rel='noopener noreferrer'
          target='_blank'
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default Seven;
