import React,{useState,useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { Container,Row,Col,Form,Button,Card,ListGroup } from 'react-bootstrap';
import { ContactService } from '../../service/ContactService';
import Loader from '../others/Loader';

const UpdateContact = () => {

  const navigate = useNavigate();
  let {ContId} = useParams();

  const [state,setState] = useState({
    loading:false,
    contact:{
      name: '',
      photo: '',
      mobile: '',
      email: '',
      company: '',
      title: '',
      groupid: ''
    },
    groups:[],
    errMsg:''
  })

  const getContDet = async () => {
    try{
    setState({...state,loading: true});
    let response = await ContactService.getSingleContact(ContId);
    let getAllGroup = await ContactService.getAllGroup();
    setState({
      ...state,
      loading:false,
      contact: response.data,
      groups: getAllGroup.data
    })
  }catch(error){
    setState({...state,loading:false,errMsg:error.message});
  }
  }

  const updateData = async (e) => {
    try{
      setState({
        ...state,
        contact:{
          ...state.contact,
          [e.target.name] : e.target.value
        }
      })
    } catch(error){
      setState({...state,loading:false,errMsg:error.message});
    }
  }

  const onSubmitData = async (e) => {
    e.preventDefault();
    try{
      let response = await ContactService.updateContact(state.contact,ContId);
      if(response){
        navigate('/contacts',{replace:true});
      } else{
        navigate(`/contacts/edit/${ContId}`,{replace:false});
      }
    } catch(error){
      setState({...state,loading:false,errMsg:error.message});
    }
  }

  useEffect(()=>{
    getContDet();
  },[ContId]);

  let {loading,contact, groups ,errMsg} = state;

  return (
    <section className='create-contact p-3'>
      {
        loading ? <Loader/> :
      <Container fluid>
      <Row>
        <Col>
        <p className='h1 text-primary'> Update Contact </p>
        <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, et fugit tenetur, ex cum labore illum corporis impedit, perspiciatis id odit at facere. Quasi ducimus, odit maiores quod saepe soluta. </p>
        </Col>
      </Row>
      {loading ? <Loader/> : 
      <Row>
          <Col xs={12} sm={6} md={6}>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='name' value={contact.name} onChange={updateData} placeholder='Name'/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='photo' value={contact.photo} onChange={updateData} placeholder='Photo URL' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='mobile' value={contact.mobile} onChange={updateData} placeholder='Mobile' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='email' name='email' value={contact.email} onChange={updateData} placeholder='Email' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='company' value={contact.company} onChange={updateData} placeholder='Company' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='title' value={contact.title} onChange={updateData} placeholder='Title' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Select type='text' name='groupid' value={contact.groupid} onChange={updateData} required={true}> 
                <option value=''>Please select group</option>
                {
                  groups.length > 0 && 
                    groups.map(group => {
                      return(
                      <option key={group.id} value={group.id}>{group.name}</option>
                      )
                    })
                }
              </Form.Select>
            </Form.Group>  
            <Form.Group className='mb-3'>
              <Button type='submit' onClick={onSubmitData} variant='success'>Update</Button>
              <Link to={`/contacts`} className='btn btn-dark ms-2'>Cancel</Link>
            </Form.Group>          
          </Form>
          </Col>
          <Col>
            <img src={contact.photo} className='contact-img'/>
          </Col>
      </Row>
      }
      </Container>
      }
  </section>
  )
}

export default UpdateContact