import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { userAuth } from '../AuthProvider';
import Footer from './Footer';


const SelectCourse = () => {
    const Swal = require('sweetalert2');
    const { user } = useContext(userAuth);
    const select = useLoaderData();
    const { name, description, image } = select;
    const handelConfirm = (event) => {
        event.preventDefault();
        const form = event.target
        Swal.fire(
            'Good job!',
            'course enroll success!',
            'success'
        )
        form.reset()
    }
    return (
        <div>           
            <Container>
                <Row>
                    <Col lg='6'>
                        <Card className='border shadow rounded'>
                            <Card.Body>
                                <Card.Title className='text-primary text-center'>You Select </Card.Title>
                                <Card.Subtitle className="mb-2 text-center "> Course: <span className='text-danger'>{name}</span></Card.Subtitle>
                                <Card.Img variant="top" style={{ height: '400px' }} className='w-90 mx-auto my-auto rounded mb-2' src={image} />
                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col lg='6'>
                        <Container className='mb-3'>
                            <h1 className='mt-4 text-primary'>For Confirm Give us Your Information Fill The Form </h1>

                            <Form onSubmit={handelConfirm} className="border w-75 mx-auto shadow p-3 mt-3 rounded-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="Enter Your Name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control name='phoneNumber' type="text" placeholder="Enter Your phone number" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name='email' defaultValue={user?.email} readOnly type="email" placeholder="Enter Your email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>age</Form.Label>
                                    <Form.Control name='age' type="number" placeholder="Enter Your Age" required />
                                </Form.Group>

                                <Button variant="primary" className='w-100' type="submit">
                                    Confirm
                                </Button>
                                <br />

                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 text-center'>
                <h1 className='mt-2 text-danger text-decoration-underline'>Help</h1>
                <p className='text-dark fs-4 mt-2'>For Any Question Mail us : <span className='text-primary'>fakehelp@gmail.com</span></p>
                <p>Hot Line - <span className='text-danger'>000011477</span> </p>
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default SelectCourse;