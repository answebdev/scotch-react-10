import React from 'react';
import { Container } from 'react-bootstrap';

const user = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  FoodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png',
  // avatar:
  // 'https://avatars0.githubusercontent.com/u/36783010?s=400&u=5a6a797ec5aafba545eed46d7ab9d20a5d826814&v=4',
};

const One = () => {
  const url = `https://twitter.com/${user.twitterUsername}`;
  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          Day 1: Display Simple Data with JSX
        </h3>
        <div className='user-deets'>
          <a href={url}>
            <img
              style={{ marginBottom: '10px' }}
              src={user.avatar}
              alt={user.name}
            />
          </a>
          <h3>
            <a href={url}>{user.name}</a>
          </h3>
          <p>
            <strong>Location: </strong>
            {user.location}
          </p>
          <p>
            <strong>Eats: </strong>
            {user.FoodType}
          </p>
          <p>
            <strong>Age: </strong>
            {user.age}
          </p>
          <p>
            <strong>Likes: </strong>
            {user.likes}
          </p>
          <p>
            <strong>Twitter: </strong>
            <a href={url}>@{user.twitterUsername}</a>
          </p>
          <a
            id='twitter-btn'
            href='https://twitter.com/chrisoncode'
            title='Follow @chrisoncode on Twitter'
          >
            <i class='fab fa-twitter'></i> @chrisoncode
          </a>

          <p>
            See the sandbox here&nbsp;
            <a
              href='https://codesandbox.io/s/4q3nk5kxo7?file=/src/styles.css:0-531'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </Container>
  );
};

export default One;
