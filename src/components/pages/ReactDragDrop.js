import React from 'react';
import { Container } from 'react-bootstrap';

const ReactDragDrop = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          Drag n' Drop Files in React
        </h3>
        <div>
          <p style={styles}>
            View the video&nbsp;
            <a
              href='https://www.youtube.com/watch?v=SmIRn6uVVVI&t=40s'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            . See the code&nbsp;
            <a
              href='https://github.com/leighhalliday/react-drag-drop-csv-file'
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
                React Dropzone &nbsp;| &nbsp;
                <a
                  href='https://react-dropzone.js.org/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                JavaScript File &nbsp;| &nbsp;
                <a
                  href='https://developer.mozilla.org/en-US/docs/Web/API/File'
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
      </div>
    </Container>
  );
};

export default ReactDragDrop;
