import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='/'>Scotch React Challenges</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/notes'>Notes</Nav.Link>
          <Nav.Link
            href='https://scotch.io/'
            rel='noopener noreferrer'
            target='_blank'
          >
            Scotch
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
