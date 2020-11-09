import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div style={{ marginTop: '40px' }}>
        <strong>Scotch React Challenges</strong>
        <p>
          To learn about the challenge, click
          <a
            className='click'
            href='https://scotch.io/courses/10-react-challenges-beginner'
            rel='noopener noreferrer'
            target='_blank'
          >
            &nbsp;here
          </a>
          .
        </p>
      </div>
    </Fragment>
  );
};

export default Home;
