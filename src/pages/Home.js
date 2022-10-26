import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import Header from '../shere/Header';
import employer from '../assests/image/employer.svg';
import startup from '../assests/image/startup.svg';
import web from '../assests/image/web.svg'
import Card from 'react-bootstrap/Card';
import model from '../assests/image/model.jpg'
import { Link } from 'react-router-dom';
import YouTubePlayer from 'react-player/youtube';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <header className='mb-5'>
                    <Carousel className='bg-dark p-5 rounded text-white'>
                        <Carousel.Item>
                            <Container>
                                <Row className="d-block w-100 h-100 d-flex">
                                    <Col lg='6'>
                                        <img src={employer} className='h-100' alt="" />
                                    </Col>
                                    <Col lg='6' className='text-center mt-5'>
                                        <h1>Progaming is fun and dedication</h1>
                                        <h4>if you wanted to reach your dream goal
                                            whay wait join with us
                                        </h4>
                                        <Link to='/course'><Button className='mt-4' varient='primary'>Get Started</Button></Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container>
                                <Row className="d-block w-100 h-100 d-flex">
                                    <Col lg='6'>
                                        <img src={web} className='h-100' alt="" />
                                    </Col>
                                    <Col lg='6' className='text-center mt-5'>
                                        <h1>Progaming is fun and dedication</h1>
                                        <h4>if you wanted to reach your dream goal
                                            whay wait join with us
                                        </h4>
                                        <Link to='/course'><Button className='mt-4' varient='primary'>Get Started</Button></Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container>
                                <Row className="d-block w-100 h-100 d-flex">
                                    <Col lg='6'>
                                        <img src={startup} className='h-100' alt="" />
                                    </Col>
                                    <Col lg='6' className='text-center mt-5'>
                                        <h1>Progaming is fun and dedication</h1>
                                        <h4>if you wanted to reach your dream goal
                                            whay wait join with us
                                        </h4>

                                        <Link to='/course'><Button className='mt-4' varient='primary'>Get Started</Button></Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>
                    </Carousel>
                </header>
                <main className='mt-5'>
                    <h1>Meet Our <span className='text-primary text-decoration-underline'>Team Member</span></h1>
                    <Row xs={1} md={2} className="g-4 mt-5 ">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col>
                                <Card className='shadow rounded'>
                                    <Card.Img style={{ width: '80%', height: '350px' }} className="mx-auto mt-5" variant="top" src={model} />
                                    <Card.Body>
                                        <Card.Title>Web Instuctor</Card.Title>
                                        <Card.Text>
                                            He is a good man and very
                                            fiendly and very opne minded he i also good teacher
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className='mb-5 mt-5'>
                        <h3>watch this video our guru tell you what is the way to be a web developer</h3>
                        <div className='mx-auto '>
                            <YouTubePlayer  
                             className="w-75 mx-auto mt-5"                             
                                url='https://youtu.be/XQ_0Zacb1_4?t=10'
                            >
                            </YouTubePlayer>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-cente'>Meet Our <span className='text-danger text-decoration-underline'>Successfull Student</span></h1>
                        <Row xs={1} md={2} className="g-4 mt-5 ">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <Col>
                                    <Card className='shadow rounded'>
                                        <Card.Img style={{ width: '80%', height: '350px' }} className="mx-auto mt-5" variant="top" src={model} />
                                        <Card.Body>
                                            <Card.Title>Web Instuctor</Card.Title>
                                            <Card.Text>
                                                He is a good man and very
                                                fiendly and very opne minded he i also good teacher
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </main>
            </Container>
        </div>
    );
};

export default Home;