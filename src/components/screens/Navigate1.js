import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/football.css';
import logo from '../images/Logo.png';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SingIn from '../images/signinwith.png';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { $CombinedState } from 'redux';
const Navigate1=() => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username,setUsername]=useState('');
  const [password,setPassword] =useState('');

  const onLogin = () => {
    console.log(username,password);
    setShow(false)
  }

return (
<div className='check11'>
  <Navbar collapseOnSelect expand="lg" variant="primary" className="">
  <Container fluid>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <img src={logo} className="logoClass logoc"/>
      <Nav.Link active  onClick={handleShow} ><label className='signin'>Sign In</label></Nav.Link>   
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>

            <MDBContainer className="my-5 d-flex flex-column w-150">
                Username:<input type="text" value={username} onChange={(event)=>setUsername(event.target.value)}/><br/>
                Password:<input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/><br/>
                <div className="d-flex justify-content-between mx-3 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>
                <Button className="mb-4" onClick={onLogin}>Sign in</Button>
                <div className="text-center">
                  <p>Not a member? <a href="#!">Register</a></p>
                  <p>or sign up with:</p>
                  <img src={SingIn} />
                </div>
            </MDBContainer>

        </Modal>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<hr/>
</div>
    )
}
export default Navigate1;