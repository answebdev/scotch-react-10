import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/ReactPagination.css';

const ReactPagination = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          React Pagination
        </h3>
        <div>
          <p style={styles}>
            View the video&nbsp;
            <a
              href='https://www.youtube.com/watch?v=IYCa1F-OWmk'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            . See the code&nbsp;
            <a
              href='https://github.com/bradtraversy/simple_react_pagination'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            .
          </p>
          <p style={styles}>
            Resources:
            <ul>
              <li>
                JSON Placeholder &nbsp;| &nbsp;
                <a
                  href='http://jsonplaceholder.typicode.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Axios &nbsp;| &nbsp;
                <a
                  href='https://www.npmjs.com/package/axios'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
            </ul>
          </p>
          <hr />
        </div>
        React Pagination
      </div>
    </Container>
  );
};

export default ReactPagination;
