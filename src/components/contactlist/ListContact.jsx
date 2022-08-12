import React from 'react';
import {Link} from 'react-router-dom';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';


const ListContact = () => {
  return (
    <>
    <section className='contact-searchlist p-3'>
      <Container fluid>
        <Row>
          <Col>
          <p className='h3'>Create Contact
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
    </>
  )
}

export default ListContact