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
          {/* <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link> */}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
