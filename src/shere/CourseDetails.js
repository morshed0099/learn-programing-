import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import YouTubePlayer from 'react-player/youtube';
import ReactToPrint from 'react-to-print';
import Footer from './Footer';

const CourseDetails = () => {
    const detailsCourse = useLoaderData()
    const ref=useRef()
    const { name, description, duration, video_length, assignment, price, id, image } = detailsCourse
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="6" className='mb-4 shadow p-2'>
                    <ReactToPrint trigger={()=><Button>Download Information</Button>} content={()=>ref.current} />
                        <Card ref={ref} className='border-0 '>                           
                            <Card.Img variant="top" className=' mx-auto pt-5' style={{ width: '90%', height: '400px' }} src={image} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Card.Title> Duration: <span className='text-primary'>{duration}</span></Card.Title>
                                <Card.Title>Total Vedio: <span className='text-primary'>{video_length}</span></Card.Title>
                                <Card.Title>Assignment: <span className='text-primary' >{assignment}</span></Card.Title>
                                <Card.Title>Price: <span className='text-primary'>{price}</span></Card.Title>

                            </Card.Body>
                        </Card>
                        <div className='d-flex justify-content-between'>
                            <Link to='/course'><Button variant="primary">Show ALL Course</Button></Link>

                            <Link to={`/selectCourse/${id}`}><Button variant="primary">Get Premium Access</Button></Link>
                        </div>
                    </Col>
                    <Col lg="6">
                        <h4 className='text-primary p-4 mb-4'>Whay You Select This Course Play Video</h4>
                        <YouTubePlayer
                            className="w-100"
                            url='https://youtu.be/Rim14e5_Hwc?t=9'
                        >
                        </YouTubePlayer>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default CourseDetails;