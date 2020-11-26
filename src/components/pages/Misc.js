import React from 'react';
import { Container } from 'react-bootstrap';

const Misc = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3>
          <strong>Misc React Projects</strong>
        </h3>
        <hr />
        <div style={{ textAlign: 'left' }}>
          <h2>
            <strong>Projects</strong>
          </h2>
          <ol>
            <li style={styles}>
              Practice 1: Input Field &nbsp;| &nbsp;
              <a href='/input-field'>View</a>
            </li>
            <li style={styles}>
              Practice 2: Managing Inline Styles &nbsp;| &nbsp;
              <a href='/managing-inline-styles'>View</a>
            </li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default Misc;
