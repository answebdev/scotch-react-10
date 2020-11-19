import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactMapGL from 'react-map-gl';

const MapboxReact = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.421106,
    longitude: -75.690308,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });

  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          Mapbox React
        </h3>
        <div>
          <p style={styles}>
            View the video&nbsp;
            <a
              href='https://www.youtube.com/watch?v=JJatzkPcmoI'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            . See the code&nbsp;
            <a
              href='https://github.com/leighhalliday/mapbox-react-demo'
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
                REACT-MAP-GL &nbsp;| &nbsp;
                <a
                  href='https://visgl.github.io/react-map-gl/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                REACT-MAP-GL (NPM) &nbsp;| &nbsp;
                <a
                  href='https://www.npmjs.com/package/react-map-gl'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                GPS Coordinates &nbsp;| &nbsp;
                <a
                  href='https://www.gps-coordinates.net/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Mapbox Account Sign-in &nbsp;| &nbsp;
                <a
                  href='https://account.mapbox.com/auth/signin/?route-to=%22https://account.mapbox.com/%22'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Open Ottawa (Data Used) &nbsp;| &nbsp;
                <a
                  href='https://open.ottawa.ca/'
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

        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          markers here
        </ReactMapGL>
      </div>
    </Container>
  );
};

export default MapboxReact;
