import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Header from './Header';
import { userAuth } from '../AuthProvider';

const ResetPassword = () => {
    const { resetPassword } = useContext(userAuth)
    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        resetPassword(email)
            .then(() => {
                alert('check your mailbox inbox and also spam box')
                form.reset()
            }).catch(error => {
                console.error('error', error)
                const errorCode = error.code;
                const errorMessage = error.message;
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
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <Button className="w-100" variant="primary" type="submit">
                        Login
                    </Button>


                </Form>
            </Container>
        </div>
    );
};

export default ResetPassword;