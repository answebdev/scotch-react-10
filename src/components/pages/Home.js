import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>
          <strong>Scotch React Challenges</strong>
        </h2>
        <p>
          To learn about the challenge, click&nbsp;
          <a
            href='https://scotch.io/courses/10-react-challenges-beginner'
            rel='noopener noreferrer'
            target='_blank'
          >
            here
          </a>
          .
        </p>
        <hr />
        <div style={{ textAlign: 'left' }}>
          <h3>
            <strong>Challenges</strong>
          </h3>
          <p>
            <strong>Day 1:</strong> Display Simple Data with JSX&nbsp;&nbsp;
            <Button
              variant='primary'
              size='sm'
              href='/display-simple-data-with-jsx'
              style={{ marginRight: '5px' }}
            >
              View <i class='fas fa-eye'></i>
            </Button>
          </p>
          <p>
            <strong>Day 2:</strong> Loop Over and Display Data with
            JSX&nbsp;&nbsp;
            <Button
              variant='primary'
              size='sm'
              href='/loop-over-and-display-data-with-jsx'
              style={{ marginRight: '5px' }}
            >
              View <i class='fas fa-eye'></i>
            </Button>
          </p>
          <p>
            <strong>Day 3:</strong> Use React State to Update the DOM
            JSX&nbsp;&nbsp;
            <Button
              variant='primary'
              size='sm'
              href='/use-react-state-to-update-the-dom'
              style={{ marginRight: '5px' }}
            >
              View <i class='fas fa-eye'></i>
            </Button>
          </p>
          <p>
            <strong>Day 4:</strong> Show an Alert Based on an Input&nbsp;&nbsp;
            <Button
              variant='primary'
              size='sm'
              href='/show-an-alert-based-on-an-input'
              style={{ marginRight: '5px' }}
            >
              View <i class='fas fa-eye'></i>
            </Button>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
