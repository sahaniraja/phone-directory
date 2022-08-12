import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col,ListGroup} from 'react-bootstrap';

const ViewContact = () => {
  return (
    <>
      <section>
        <Container fluid className='p-3'>
          <Row>
            <Col >
            <p className='h3 text-warning'>View Contact</p>
            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aut aliquam provident sed iusto nesciunt, dicta veniam adipisci nemo magnam, vitae labore dolores! Nulla voluptatum dicta earum recusandae error consequatur?</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' />
            </Col>
            <Col xs={7}>
            <ListGroup>
              <ListGroup.Item>Name: <span className='fw-bold'>Raja Sahani</span> </ListGroup.Item>
              <ListGroup.Item>Mobile: <span className='fw-bold'>9876543210</span> </ListGroup.Item>
              <ListGroup.Item>Email: <span className='fw-bold'>abc@gmail.com</span></ListGroup.Item>
              <ListGroup.Item>Company: <span className='fw-bold'>Om Sai Pvt Ltd.</span></ListGroup.Item>
              <ListGroup.Item>Title: <span className='fw-bold'>Mr.</span></ListGroup.Item>
              <ListGroup.Item>Group: <span className='fw-bold'>Family</span></ListGroup.Item>
            </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='p-3'>
        <Link to={`/contact/list`} className='btn btn-warning text-dark'>Back</Link>
      </section>
    </>
  )
}

export default ViewContact