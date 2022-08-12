import React from 'react';
import {Link} from 'react-router-dom';
import { Container,Row,Col,Form,Button,Card,ListGroup } from 'react-bootstrap';

const UpdateContact = () => {
  return (
    <section className='create-contact p-3'>
    <Container fluid>
      <Row>
        <Col>
        <p className='h1 text-primary'> Update Contact </p>
        <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, et fugit tenetur, ex cum labore illum corporis impedit, perspiciatis id odit at facere. Quasi ducimus, odit maiores quod saepe soluta. </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={6}>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Control type='text'  placeholder='Name'/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control type='text'  placeholder='Photo URL'/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control type='text'  placeholder='Mobile'/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control type='text'  placeholder='Email'/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control type='text'  placeholder='Company'/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control type='text'  placeholder='Title'/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control type='text'  placeholder='Select Group'/>
          </Form.Group>  
          <Form.Group className='mb-3'>
            <Link to={`/`} className='btn btn-primary'>Update</Link>
            <Link to={`/contact/list`} className='btn btn-dark ms-2'>Cancel</Link>
          </Form.Group>          
        </Form>
        </Col>
        <Col>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' className='contact-img'/>
        </Col>
      </Row>

    </Container>
  </section>
  )
}

export default UpdateContact