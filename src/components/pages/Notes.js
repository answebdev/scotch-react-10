import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import ogimage from '../../img/og.png';

import MetaTags from 'react-meta-tags';

const Notes = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <Helmet>
        <title>Scotch 10 | Notes</title>
      </Helmet>

      <MetaTags>
        <meta property='og:image' content={ogimage} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1024' />
        <meta property='og:image:height' content='1024' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='https://scotch10.netlify.app/notes/' />
        <meta property='og:title' content='Scotch 10 | Notes' />
        <meta
          property='og:description'
          content='An assortment of notes related to React.'
        />

        <meta
          name='description'
          content='An assortment of notes related to React.'
        />
      </MetaTags>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3>
          <strong>React Notes</strong>
        </h3>
        <hr />
        <div style={{ textAlign: 'left' }}>
          <h2 data-test='notes-component'>
            <strong>Projects</strong>
          </h2>
          <ol style={{ lineHeight: '2' }}>
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
            <li style={styles}>
              Topic 7: Targeting a Single Item in a List with onClick when
              Mapping &nbsp;| &nbsp;
              <a href='/targeting-a-single-item-in-a-list-with-onclick-when-mapping'>
                View
              </a>
            </li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default Notes;
