import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Header from './Header';
import { userAuth } from '../AuthProvider';
import Swal from 'sweetalert2';

const ResetPassword = () => {
    const Swal =require('sweetalert2');
    const { resetPassword } = useContext(userAuth)
    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        resetPassword(email)
            .then(() => {
               
                Swal.fire(
                    'check your mailbox inbox and also spam box!',                                           
                    'success'
                  )
                form.reset()
            }).catch(error => {
                console.error('error', error)
                const errorCode = error.code;
                const errorMessage = error.message;                       
                Swal.fire({
                    title: 'Error!',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            })

    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Form onSubmit={handelSubmit} className="border w-75 mx-auto  rounded-3 shadow p-3 mt-3 rounded-lg">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                       
                    </Form.Group>


                    <Button className="w-100" variant="primary" type="submit">
                      Reset Pssword
                    </Button>


                </Form>
            </Container>
        </div>
    );
};

export default ResetPassword;