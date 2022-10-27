import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { userAuth } from '../AuthProvider';
import Header from '../shere/Header';
import Swal from 'sweetalert2';
import Footer from '../shere/Footer';

const Profile = () => {
    const Swal =require('sweetalert2');
    const {user,auth}=useContext(userAuth);
    const handelSubmit=(event)=>{
       event.preventDefault()
       const form =event.target;
       const dispalyName=form.name.value;
       const photoURL=form.photoURL.value;       
       updateProfile(auth.currentUser,{
        displayName:dispalyName,photoURL:photoURL        
       }).then(()=>{
        Swal.fire(
            'Good job!',
            'update success!',
            'success'
          )
       }).catch(error=>{
        console.error('error',error);
        const massage=error.message  
        Swal.fire({
            title: 'Error!',
            text: massage,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
       })
    }
    return (
        <div>
            <Header></Header>
            <Container>            
                <Form className="border w-75 mx-auto shadow p-3 mt-3 rounded-3" onSubmit={handelSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' defaultValue={user?.displayName} type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control defaultValue={user?.photoURL} name='photoURL' type="text" placeholder="Enter Your photo Url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control defaultValue={user?.email} readOnly name='email' type="email" placeholder="Enter Your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your uid</Form.Label>
                        <Form.Control readOnly defaultValue={user?.uid} name='uid' type="text"  />
                    </Form.Group>
                  
                    <Button variant="primary" className='w-100' type="submit">
                        Update
                    </Button>                    
                </Form>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Profile;