import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const SelectCourse = () => {

    const select = useLoaderData();
    const { name, description } = select;
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='6'>
                        <Card className='border shadow rounded'> 
                            <Card.Body>
                                <Card.Title className='text-primary text-center'>You Select </Card.Title>
                                <Card.Subtitle className="mb-2 text-center "> Course: <span className='text-warning'>{name}</span></Card.Subtitle>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        <h1 className='mt-4 text-primary'>For Confirm Give us Your Information Fill The Form </h1>
                        <p className='text-dark fs-4 mt-2'>For Any Question Mail us : <span className='text-primary'>fakehelp@gmail.com</span></p>
                        <p>Hot Line - <span className='text-danger'>000011477</span> </p>
                    </Col>
                    <Col lg='6'>
                        <Container>
                            <Form className="border w-75 mx-auto shadow p-3 mt-3 rounded-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control name='phoneNumber' type="text" placeholder="Enter Your phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter Your email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" />
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
        </div >
    );
};

export default SelectCourse;