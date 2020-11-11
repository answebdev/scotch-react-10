import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const Three = () => {
  const [name, setName] = useState('Nick');
  const [age, setAge] = useState(30);

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          Day 3: Use React State to Update the DOM
        </h3>

        <div className='input-display'>
          <p>Display Name: {name}</p>
          <p>Display Age: {age}</p>
        </div>

        <div className='inputs'>
          <div className='field'>
            <label className='label'>Name: </label>
            <input
              className='input'
              type='text'
              placeholder='William'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className='field'>
            <label className='label'>Age: </label>
            <input
              className='input'
              type='number'
              placeholder='38'
              value={age}
              onChange={(event) => setAge(+event.target.value)}
            />
          </div>
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
      </div>
    </Container>
  );
};

export default Three;
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
