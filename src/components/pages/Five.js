import React, { useState } from 'react';

const Five = () => {
  //   const [number1, setNumber1] = useState(34);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function addThemTogether() {
    setTotal(number1 + number2);
  }

  return (
    <div className='Calc'>
      <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
        Day 5: Adding Calculator
      </h3>

      {/* Test: */}
      {/* <p>
        <strong>Number 1:</strong> {number1}
      </p> */}

      <h1>Adding Two Numbers</h1>

      <div className='number-inputs'>
        <input
          type='number'
          placeholder='0'
          value={number1}
          //   Use the Unary Operator (+) to convert the string into a number:
          // Inline 'onChange' function:
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <input
          type='number'
          placeholder='0'
          value={number2}
          //   Use the Unary Operator (+) to convert the string into a number:
          onChange={(e) => setNumber2(+e.target.value)}
        />
      </div>

      <button onClick={addThemTogether}>Add Them!</button>

      <h2 id='total'>{total}</h2>
      <p>
        See the sandbox here&nbsp;
        <a
          href='https://codesandbox.io/s/q8nxoyqn49'
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

export default Five;
