import React, { useState } from 'react';
// import { Container } from 'react-bootstrap';

const Six = () => {
  const [offsetTop, setOffsetTop] = useState(300);

  function moveBoxUp() {
    setOffsetTop(offsetTop - 50);
  }

  const boxStyles = {
    transform: `translateY(${offsetTop}px)`,
  };

  return (
    <div className='BoxMain'>
      <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
        Day 6: DOM Movement with Events
      </h3>

      <button onClick={moveBoxUp}>👆 Move Up 👆</button>

      <div className='box' style={boxStyles}></div>

      <p>
        See the sandbox here&nbsp;
        <a
          href='https://codesandbox.io/s/qq4xww2jzj%5C'
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

export default Six;
