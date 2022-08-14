import React,{useEffect,useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Container,Row,Col,ListGroup} from 'react-bootstrap';
import Loader from '../others/Loader';
import { ContactService } from '../../service/ContactService';

const ViewContact = () => {
  
  let {ContId} = useParams();

  let [state,setState] = useState({
    loading: false,
    contact: {},
    groupname: {},
    errMsg: ''
  });

  const viewData = async () =>{
    try{
      setState({...state,loading:true});
    let response = await ContactService.getSingleContact(ContId);
    let grpnameres = await ContactService.getGrpName(response.data);
    //console.log(grpnameres.data);
    setState({
      ...state,
      loading: false,
      contact: response.data,
      groupname: grpnameres.data
    })
  } catch(error)
  {
    setState({
      ...state,
      loading:false,
      errMsg: error.message
    })
  }
  }

  useEffect(()=>{
    viewData()
  },[ContId]);

  let {loading, contact, groupname, errMsg} = state;

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
          
            { loading ? <Loader/>: 
            <Row>
            {
              Object.keys(contact).length > 0 && Object.keys(groupname).length > 0 && <React.Fragment>
                <Col xs={4}>
              <img src={contact.photo} alt='Profile' />
            </Col>
            <Col xs={7}>
            <ListGroup>
              <ListGroup.Item>Name: <span className='fw-bold'>{contact.name}</span> </ListGroup.Item>
              <ListGroup.Item>Mobile: <span className='fw-bold'>{contact.mobile}</span> </ListGroup.Item>
              <ListGroup.Item>Email: <span className='fw-bold'>{contact.email}</span></ListGroup.Item>
              <ListGroup.Item>Company: <span className='fw-bold'>{contact.company}</span></ListGroup.Item>
              <ListGroup.Item>Title: <span className='fw-bold'>{contact.title}</span></ListGroup.Item>
              <ListGroup.Item>Group: <span className='fw-bold'>{groupname.name}</span></ListGroup.Item>
            </ListGroup>
            </Col>
              </React.Fragment>
            }
            </Row>
            }
         
        </Container>
      </section>
      <section className='p-3'>
        <Link to={`/contacts`} className='btn btn-warning text-dark'>Back</Link>
      </section>
    </>
  )
}

export default ViewContact