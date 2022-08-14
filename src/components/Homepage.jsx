import React from 'react'
import Loader from './others/Loader';
import {Link} from 'react-router-dom';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import contact from '../components/assets/images/contact.png';

const Homepage = () => {
  return (
    <section className='contact-homepage p-3'>
      <Container fluid>
        <Row>
          <Col xs={6} className='d-flex align-items-center'>
            <Card className='text-center'>
              <Card.Text>
                <p className='h2 text-primary p-2'>Welcome To Phone Directory</p>
              </Card.Text>
              <Card.Body>
              <img src={contact} alt='Phone Directory' style={{height:'450px',widht:'450px'}}/>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card className='text-center'>
              <Card.Text>
                <p className='h4 text-danger p-3'> Phone Categories </p>
              </Card.Text>
              <Card.Body>
                <Link to={'/contacts'} className='m-1 btn btn-primary'><i className='fa fa-book'></i> Contacts </Link>
                <Link to={'/contacts'} className='m-1 btn btn-primary'><i className='fa fa-user-group'></i> Groups </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Homepage