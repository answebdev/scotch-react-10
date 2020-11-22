import React from 'react';
import { Container } from 'react-bootstrap';

const ReactForms = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>React Forms</h3>
        <div>
          <p style={styles}>
            View the video&nbsp;
            <a
              href='https://www.youtube.com/watch?v=XjTqUsQ4a8g'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            . See the code&nbsp;
            <a
              href='https://github.com/leighhalliday/react-forms-demo'
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
                React Autosuggest &nbsp;| &nbsp;
                <a
                  href='https://www.npmjs.com/package/react-autosuggest'
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
              <li>
                Formik &nbsp;| &nbsp;
                <a
                  href='https://www.npmjs.com/package/formik'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Yup &nbsp;| &nbsp;
                <a
                  href='https://www.npmjs.com/package/yup'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Normalize.css &nbsp;| &nbsp;
                <a
                  href='https://www.npmjs.com/package/normalize.css?activeTab=versions'
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
        React Forms
      </div>
    </Container>
  );
};

export default ReactForms;
