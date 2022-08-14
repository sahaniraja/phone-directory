import React,{useState,useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import { ContactService } from '../../service/ContactService';

const CreateContact = () => {

  const navigate = useNavigate();

  const [state,setState] = useState({
    loading: false,
    contact: {
      name: '',
      photo: '',
      mobile: '',
      email: '',
      company: '',
      title: ''
    },
    groups: [],
    errMsg: ''
  })

  const updateData = (e) =>{
    try{
      setState({
        ...state,
        contact:{
          ...state.contact,
          [e.target.name]: e.target.value
        }
      })
    } catch(error)
    {
      setState({...state,loading:false, errMsg: error.message});
    }
  }

  const getAllGrp = async () =>
  {
    try{
      setState({...state,loading:true});
      let response = await ContactService.getAllGroup();
      setState({...state,loading:false,groups:response.data})
    } catch(error){
      setState({...state,loading:false,errMsg:error.message});
    }
    
  } 

  const onSubmitData = async (e) => {
    e.preventDefault();
    try{
      setState({...state,loading:true});
      let response = await ContactService.createContact(state.contact);
      if(response){
        navigate('/contacts',{replace : true});
      }
      else{
        navigate('/contacts/create',{replace : false});
      }
    } catch(error){
      setState({...state,loading:false,errMsg:error.message});
    }
  }

  useEffect(()=>{
    getAllGrp();
  },[]);

  let {loading, contact, groups, errMsg} = state;

  return (
    <section className='create-contact p-3'>
      <Container fluid>
        <Row>
          <Col>
          <p className='h1 text-success'> Add Contact </p>
          <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, et fugit tenetur, ex cum labore illum corporis impedit, perspiciatis id odit at facere. Quasi ducimus, odit maiores quod saepe soluta. </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6}>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='name' value={contact.name} onChange={updateData} placeholder='Name' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='photo' value={contact.photo} onChange={updateData} placeholder='Photo URL' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='mobile' onChange={updateData}  placeholder='Mobile' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='email' name='email' onChange={updateData} placeholder='Email' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='company' onChange={updateData}  placeholder='Company' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='title' onChange={updateData} placeholder='Title' required={true}/>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Select name='groupid' onChange={updateData} required={true}>
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
              <Button variant='success' onClick ={onSubmitData}>Add</Button>
              <Link to={`/contacts`} className='btn btn-dark ms-2'>Cancel</Link>
            </Form.Group>          
          </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CreateContact