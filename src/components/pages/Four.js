import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';

const Four = () => {
  // We don't want to give the user anything, since they have to guess,
  // so we leave it blank (empty string) --> useState('')
  const [phrase, setPhrase] = useState('');

  if (phrase === 'open sesame') {
    swal('Good job!', 'You may pass!', 'success');
  }

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          Day 4: Show an Alert Based on an Input
        </h3>

        <div className='phrase'>
          <h2>What's the secret phrase?</h2>

          {/* Test: */}
          {/* <p>{phrase}</p> */}

          <input
            type='text'
            placeholder='Super duper secret'
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />

          <p>
            Hint: It's <strong>open sesame</strong>
          </p>
        </div>

        <p>
          See the sandbox here&nbsp;
          <a
            href='https://codesandbox.io/s/2x73k4o38n'
            rel='noopener noreferrer'
            target='_blank'
          >
            here
          </a>
          .
        </p>
        <p>
          <a
            href='https://sweetalert.js.org/'
            rel='noopener noreferrer'
            target='_blank'
          >
            SweetAlert&nbsp;
          </a>
          added by me.
        </p>
      </div>
    </Container>
  );
};

export default Four;
