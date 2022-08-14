import React,{useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import { ContactService } from '../../service/ContactService';
import Loader from '../others/Loader';
import { Container,Row,Col,Form,Button,Card,ListGroup } from 'react-bootstrap';

const ListContact = () => {

  let [query,setQuery] = useState({
    text:''
  })
  let [state,setState] = useState({
    loading:false,
    contacts:[],
    searchContacts:[],
    errMsg:''
  })
 
const  getData = async () => {
    setState({...state,loading:true});
    try{
      let response = await ContactService.getAllContact();
      setState({
        ...state,
        loading: false,
        contacts: response.data,
        searchContacts: response.data
      })
    } catch(error)
    {
      setState({...state,loading:false, errMsg:error.message});
    }
  }

  useEffect( () => {
    getData();
  },[])

  const onDelCont = async (ContId) =>{
    try{
      let response = await ContactService.deleteContact(ContId);
      if(response)
      {
        setState({...state,loading:true});
        let response = await ContactService.getAllContact();
        setState({
          ...state,
          loading: false,
          contacts: response.data ,
          searchContacts: response.data
        })
      }
    } catch(error){
      setState({...state,loading:false,errMsg:error.message});
    }
  }

  const searchCont = (e) =>{
    setQuery({...query, text: e.target.value });
    let chkcontacts = state.contacts.filter(contact =>{
      return contact.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setState({...state,searchContacts:chkcontacts})
  }

  let {loading,contacts,searchContacts,errMsg} = state;

  return (
    <>
    <section className='contact-searchlist p-3'>
      <Container fluid>
        <Row>
          <Col>
          <p className='h3 fw-bold'>Create Contact
          <Link to='/contacts/create' className='btn btn-success ms-2'><i className='fa fa-plus-circle me-2'></i>New</Link>
          </p>
          <p className='fst-italic'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rerum maiores ab voluptatum vitae tenetur neque eos fugiat eaque sit natus placeat ducimus dicta consequatur eligendi necessitatibus illo, deserunt error.
          </p>
          </Col>
          <Col>
          <Form className='row'>
            <Col>
            <Form.Group>
              <Form.Control tpye='text' name='search' value={query.text} onChange={searchCont} placeholder='Type your search' />
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
    {
      loading ? <Loader/> : 
      <section>
      <Container fluid>
        {
          searchContacts.length > 0 && searchContacts.map(contact => {
            return(
              <div className='col-md-6 my-2' key={contact.id}>
                <Row>
                  <Col xs={4}>
                  <Card>
                    <Card.Body>
                      <img src={contact.photo} className='img-fluid contact-img'  />
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col xs={7}>
                    <ListGroup>
                      <ListGroup.Item>Name: <span className='fw-bold'>{contact.name}</span> </ListGroup.Item>
                      <ListGroup.Item>Mobile: <span className='fw-bold'>{contact.mobile}</span> </ListGroup.Item>
                      <ListGroup.Item>Email: <span className='fw-bold'>{contact.email}</span></ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col xs={1}>
                    <Link to={`/contacts/view/${contact.id}`} className='btn btn-warning my-1'><i className='fa fa-eye'/></Link>
                    <Link to={`/contacts/edit/${contact.id}`} className='btn btn-success my-1'><i className='fa fa-pencil'/></Link>
                    <Button variant='danger' onClick={()=>onDelCont(contact.id)}><i className='fa fa-trash'/></Button>
                  </Col>
                  </Row>
              </div>
            )
          })
        }
      </Container>
    </section>
    }
    
    </>
  )
}

export default ListContact