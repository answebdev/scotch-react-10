import React from 'react';
import { Container } from 'react-bootstrap';
import classes from '../styles/TopicSix.module.css';

const TopicSix = ({ secretWord }) => {
  // Instead of importing useState, take it as a property from the default export from React (React.useState).
  // This is going to make it so that we can mock it.
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <Container>
      <div data-test='component-input'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          Topic 6: Using Jest to Test React Hooks
        </h3>

        <p>
          Useful resources:
          <ul>
            <li>
              Udemy Source &nbsp;| &nbsp;
              <a
                href='https://www.udemy.com/course/react-testing-with-jest-and-enzyme/learn/lecture/16176017#questions'
                rel='noopener noreferrer'
                target='_blank'
              >
                View
              </a>
            </li>
          </ul>
        </p>
        <hr />
        <div>
          <div style={{ marginBottom: '0' }}>
            <form>
              <input
                className={classes.MainInput}
                data-test='input-box'
                type='text'
                placeholder='Enter Guess'
                value={currentGuess}
                onChange={(event) => setCurrentGuess(event.target.value)}
              />
              <button
                data-test='submit-button'
                className={classes.SubmitBtn}
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: update guessedWords
                  // TODO: check against secretWord and update success if needed
                  setCurrentGuess('');
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopicSix;
