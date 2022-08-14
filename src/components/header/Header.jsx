import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg='warning' expand='lg'>
      <Container fluid>
        <Navbar.Brand><Link to={'/'} className='navbar-brand'><i className='fa fa-mobile text-primary' />Phone <span className='text-success'>Directory</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' navbarScroll>
            <Link to={'/'} className='navbar-brand'>Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header