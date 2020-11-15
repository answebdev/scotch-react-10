import React from 'react';
import { Container } from 'react-bootstrap';

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
            <strong>Day 1:</strong> Display Simple Data with JSX &nbsp;| &nbsp;
            <a href='/display-simple-data-with-jsx'>View</a>
          </p>
          <p>
            <strong>Day 2:</strong> Loop Over and Display Data with JSX &nbsp;|
            &nbsp;
            <a href='/loop-over-and-display-data-with-jsx'>View</a>
          </p>
          <p>
            <strong>Day 3:</strong> Use React State to Update the DOM JSX
            &nbsp;| &nbsp;
            <a href='/use-react-state-to-update-the-dom'>View</a>
          </p>
          <p>
            <strong>Day 4:</strong> Show an Alert Based on an Input &nbsp;|
            &nbsp;
            <a href='/show-an-alert-based-on-an-input'>View</a>
          </p>
          <p>
            <strong>Day 5:</strong> Adding Calculator &nbsp;| &nbsp;
            <a href='/adding-calculator'>View</a>
          </p>
          <p>
            <strong>Day 6:</strong> DOM Movement with Events &nbsp;| &nbsp;
            <a href='/dom-movement-with-events'>View</a>
          </p>
          <p>
            <strong>Day 7:</strong> Fetch and Display from an API &nbsp;| &nbsp;
            <a href='/fetch-and-display-from-an-api'>View</a>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
