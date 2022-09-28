import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import '../styles/TopicSeven.css';

const TopicSeven = () => {
  const [isActive, setActive] = useState('false');
  const [myStyle, setMyStyle] = useState(false);
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

  const handleClick2 = (id) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [id]: !prevState[id],
    }));
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
              Stack Overflow &nbsp;| &nbsp;
              <a
                href='https://stackoverflow.com/questions/71946724/how-to-change-style-of-one-element-in-map-using-react'
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
          <p>
            Here, when the button is clicked, all of the items are targeted and
            the background color of all the items is changed.
          </p>
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

        <div>
          <h4 style={{ marginTop: '40px' }}>Variation 2</h4>
          <p>
            Here, when the button is clicked, a single item is targeted and the
            background color of only the item that is clicked is changed.
          </p>
          <div style={{ marginBottom: '0', display: 'flex', flexWrap: 'wrap' }}>
            {/* Display only the first 6 items: */}
            {episode.slice(0, 6).map((item) => {
              return (
                <div key={item.id} style={{ margin: '40px' }}>
                  <Card
                    className={myStyle[`${item.id}`] ? 'style2' : 'style1'}

                    // Alternative Way: Using state with 'style'.
                    // style={{
                    //   backgroundColor: myStyle[`${item.id}`]
                    //     ? 'tomato'
                    //     : '#ffffff',
                    //   width: myStyle[`${item.id}`] ? '18rem' : '18rem',
                    // }}
                  >
                    <Card.Img variant='top' src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.storyline}</Card.Text>
                      <Button
                        variant='primary'
                        onClick={() => handleClick2(item.id)}
                      >
                        Click Me
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ marginTop: '40px' }}>Variation 3</h4>
        <p>
          Here, when the button is clicked, a single item is targeted and the
          'Details' text of only the item that is clicked is toggled.
        </p>
        <div style={{ marginBottom: '0', display: 'flex', flexWrap: 'wrap' }}>
          {/* Display only the first 6 items: */}
          {episode.slice(0, 6).map((item) => {
            return (
              <div key={item.id} style={{ margin: '40px' }}>
                <Card className='style1'>
                  <Card.Img variant='top' src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.storyline}</Card.Text>
                    <div>
                      <p>
                        <strong>Details</strong>
                        <div
                          onClick={() => handleClick2(item.id)}
                          style={{ float: 'right', cursor: 'pointer' }}
                        >
                          <span>
                            {myStyle[`${item.id}`] ? (
                              <i class='fa-solid fa-minus'></i>
                            ) : (
                              <i class='fa-solid fa-plus'></i>
                            )}
                          </span>
                        </div>
                      </p>
                      <p
                        className={myStyle[`${item.id}`] ? 'style3' : 'style4'}
                      >
                        <div style={{ lineHeight: '2' }}>
                          <p style={{ width: '300px', lineHeight: '1.5' }}>
                            <strong>Season: </strong> {item.season}
                            <br />
                            <strong>Episode: </strong> {item.episode}
                            <br />
                            <strong>Directed by: </strong>
                            {item.directed_by}
                            <br />
                            <strong>Written by: </strong>
                            {item.written_by}
                            <br />
                            <strong>Original Air Date: </strong>
                            {item.air_date}
                          </p>
                        </div>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default TopicSeven;
