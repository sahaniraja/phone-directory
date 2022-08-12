import React from 'react';
import {Link} from 'react-router-dom';
import { Container,Row,Col,Form,Button,Card,ListGroup } from 'react-bootstrap';

const ListContact = () => {
  return (
    <>
    <section className='contact-searchlist p-3'>
      <Container fluid>
        <Row>
          <Col>
          <p className='h3 fw-bold'>Create Contact
          <Link to='/contact/create' className='btn btn-success ms-2'><i className='fa fa-plus-circle me-2'></i>New</Link>
          </p>
          <p className='fst-italic'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rerum maiores ab voluptatum vitae tenetur neque eos fugiat eaque sit natus placeat ducimus dicta consequatur eligendi necessitatibus illo, deserunt error.
          </p>
          </Col>
          <Col>
          <Form className='row'>
            <Col>
            <Form.Group>
              <Form.Control tpye='text' placeholder='Type your search' />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
              <Button type='submit' variant='primary'>Search</Button>
            </Form.Group>
            </Col>
          </Form>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container fluid >
        <div className='col-md-6'>
        <Row>
          <Col xs={4}>
          <Card>
            <Card.Body>
              <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' className='img-fluid contact-img'  />
            </Card.Body>
          </Card>
          </Col>
          <Col xs={7}>
            <ListGroup>
              <ListGroup.Item>Name: <span className='fw-bold'>Raja Sahani</span> </ListGroup.Item>
              <ListGroup.Item>Mobile: <span className='fw-bold'>9876543210</span> </ListGroup.Item>
              <ListGroup.Item>Email: <span className='fw-bold'>abc@gmail.com</span></ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={1}>
            <Link to={`/contact/view/:contid`} className='btn btn-warning my-1'><i className='fa fa-eye'/></Link>
            <Link to={`/contact/update/:contid`} className='btn btn-success my-1'><i className='fa fa-pencil'/></Link>
            <Link to={`/`} className='btn btn-danger my-1'><i className='fa fa-trash'/></Link>
          </Col>
          </Row>
        </div>
      </Container>
    </section>
    </>
  )
}

export default ListContact