import React from 'react';
import { Container } from 'react-bootstrap';

const Notes = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3>
          <strong>React Notes</strong>
        </h3>
        <hr />
        <div style={{ textAlign: 'left' }}>
          <h2 data-test='notes-component'>
            <strong>Projects</strong>
          </h2>
          <ol>
            <li style={styles}>
              Topic 1: Input Field &nbsp;| &nbsp;
              <a href='/input-field'>View</a>
            </li>
            <li style={styles}>
              Topic 2: Setting Styles Dynamically &nbsp;| &nbsp;
              <a href='/setting-styles-dynamically'>View</a>
            </li>
            <li style={styles}>
              Topic 3: Managing Inline Styles &nbsp;| &nbsp;
              <a href='/managing-inline-styles'>View</a>
            </li>
            <li style={styles}>
              Topic 4: Styled Components &nbsp;| &nbsp;
              <a href='/styled-components'>View</a>
            </li>
            <li style={styles}>
              Topic 5: Setting Styles Dynamically with Styled Components &nbsp;|
              &nbsp;
              <a href='/setting-styles-dynamically-with-styled-components'>
                View
              </a>
            </li>
            <li style={styles}>
              Topic 6: Using Jest to Test React Hooks &nbsp;| &nbsp;
              <a href='/using-jest-to-test-react-hooks'>View</a>
            </li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default Notes;
