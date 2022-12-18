import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../shere/Header';
import privateRoute from '../assests/image/privateRoute.png';
import node from '../assests/image/node.png'
import cors  from '../assests/image/cors.png'
import firebase from '../assests/image/firebase.png'
import Footer from '../shere/Footer';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <Container >
                <Row xs={1} md={2} className="g-4 mt-5  mb-5">
                    <Col>
                        <Card className='shadow rounded' style={{height:'650px'}}>
                            <Card.Img src={cors} style={{ width: '80%', height: '350px' }} className="mx-auto mt-5" variant="top" />
                            <Card.Body style={{height:'220px'}}>
                                <Card.Title>what is cors?</Card.Title>
                                <Card.Text>
                                    In this section, we will explain what cross-origin resource sharing (CORS) is, describe some common examples of cross-origin resource sharing based attacks, and discuss how to protect against these attacks. This topic was written in collaboration with PortSwigger Research, who popularized this attack class with the presentation Exploiting CORS misconfigurations for Bitcoins and bounties.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow rounded' style={{height:'650px'}}>
                            <Card.Img src={firebase} style={{ width: '80%', height: '350px' }} className="mx-auto mt-5" variant="top" />
                            <Card.Body style={{height:'220px'}}>
                                <Card.Title> Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                                <Card.Text className='mb-3'>
                                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more
                                other option:
                                1:Auth0, 2:MongoDB, 3:Passport, 4:Okta,

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow rounded' style={{height:'650px'}}>
                            <Card.Img src={privateRoute} style={{ width: '80%', height: '350px' }} className="mx-auto mt-5" variant="top" />
                            <Card.Body style={{height:'220px'}}>
                                <Card.Title>How does the private route work?</Card.Title>
                                <Card.Text>
                                The private route component is similar to the public route, the only change 
                                is that redirect URL and authenticate condition.

                                If the user is not authenticated he will be 
                                redirected to the login page and the user can only 
                                access the authenticated routes If he is authenticated (Logged in).
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow rounded' style={{height:'650px'}}>
                            <Card.Img src={node} style={{ width: '80%', height: '350px'}} className="mx-auto mt-5" variant="top" />
                            <Card.Body style={{height:'220px'}} >
                                <Card.Title>What is Node? How does Node work?</Card.Title>
                                <Card.Text>
                                Node.JS works and runs on the VB JavaScript engine. An essential thing to comprehend is that Node isn’t a web server. In this article will give a simple method to comprehend the outline of how Node.JS works? along with its functions, what makes Node.JS extraordinary and clarify that it’s something other than server-side JavaScript.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;