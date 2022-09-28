import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import '../styles/TopicSeven.css';

const TopicSeven = () => {
  const [isActive, setActive] = useState('false');
  const [episode, setEpisodes] = useState([]);
  const url = `https://the-twilight-zone-api.vercel.app/episodes`;

  useEffect(() => {
    fetchEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchEpisodes() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleClick1 = () => {
    setActive(!isActive);
  };

  return (
    <Container>
      <div data-test='component-input'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          Topic 7: Targeting a Single Item in a List with onClick when Mapping
        </h3>

        <p>
          Useful resources:
          <ul>
            <li>
              freeCodeCamp &nbsp;| &nbsp;
              <a
                href='https://forum.freecodecamp.org/t/how-to-target-single-item-in-list-with-onclick-when-mapping-in-reactjs/476622'
                rel='noopener noreferrer'
                target='_blank'
              >
                View
              </a>
            </li>
            <li>
              How to toggle a class in React &nbsp;| &nbsp;
              <a
                href='https://reactgo.com/react-toggle-class/'
                rel='noopener noreferrer'
                target='_blank'
              >
                View
              </a>
            </li>
            <li>
              3 ways for toggle a class in React &nbsp;| &nbsp;
              <a
                href='https://devdojo.com/krissanawat101/3-ways-for-toggle-a-class-in-react'
                rel='noopener noreferrer'
                target='_blank'
              >
                View
              </a>
            </li>
          </ul>
        </p>
        <hr />
        <div>
          <h4>Variation 1</h4>
          <div style={{ marginBottom: '0', display: 'flex', flexWrap: 'wrap' }}>
            {/* Display only the first 6 items: */}
            {episode.slice(0, 6).map((item) => {
              return (
                <div key={item.id} style={{ margin: '40px' }}>
                  <Card className={isActive ? 'style1' : 'style2'}>
                    <Card.Img variant='top' src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.storyline}</Card.Text>
                      <Button variant='primary' onClick={handleClick1}>
                        Click Me
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <br />
        <div>
          <h4>Variation 2</h4>
          <div style={{ marginBottom: '0', display: 'flex', flexWrap: 'wrap' }}>
            {/* Display only the first 6 items: */}
            {episode.slice(0, 6).map((item) => {
              return (
                <div key={item.id} style={{ margin: '40px' }}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.storyline}</Card.Text>
                      <Button variant='primary'>Click Me</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopicSeven;
