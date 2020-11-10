import React from 'react';
import { Container } from 'react-bootstrap';
import users from './users-data-day2';

const Two = () => {
  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          Day 2: Loop Over and Display Data with JSX
        </h3>

        {/* Iterate over array in user data.
            Display each data in  array in a card.
            Each card must have a 'key' attribute. */}
        <div className='users'>
          {users.map((user, index) => {
            return (
              <div key={index}>
                <p>{user.name}</p>
                <p>{user.location}</p>
                <p>{user.car}</p>
              </div>
            );
          })}
        </div>

        <p>
          See the sandbox here&nbsp;
          <a
            href='https://codesandbox.io/s/o41ry580w9'
            rel='noopener noreferrer'
            target='_blank'
          >
            here
          </a>
          .
        </p>
      </div>
    </Container>
  );
};

export default Two;
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
