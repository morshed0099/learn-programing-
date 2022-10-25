import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import YouTubePlayer from 'react-player/youtube';

const CourseDetails = () => {
    const detailsCourse=useLoaderData()
    const {name,description,duration,video_length,assignment,price, id,image}=detailsCourse
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="6">
                    <Card className='mb-4 shadow'>
                <Card.Img variant="top" className='mx-auto pt-5' style={{width:'90%',height:'400px'}} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title> Duration: <span className='text-primary'>{duration}</span></Card.Title>
                    <Card.Title>Total Vedio: <span className='text-primary'>{video_length}</span></Card.Title>
                    <Card.Title>Assignment: <span className='text-primary' >{assignment}</span></Card.Title>
                    <Card.Title>Price: <span className='text-primary'>{price}</span></Card.Title>
                    <Link to='/course'><Button variant="primary">Show ALL Course</Button></Link>
                </Card.Body>
            </Card>
                    </Col>
                    <Col lg="6">
                        <h4 className='text-primary p-4 mb-4'>Way You Select This Course Play Video</h4>
                        <YouTubePlayer
                         url='https://youtu.be/Rim14e5_Hwc?t=9'
                        >
                        </YouTubePlayer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;