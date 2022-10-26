import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CategoryWiseCourse = ({allCourse}) => {
    
    
    const {id,name,price,duration,image,assignment,video_length,description }=allCourse;
    return (
        <div>
            <Card className='mb-4 shadow'>
                <Card.Img variant="top" className='mx-auto pt-5' style={{width:'90%',height:'400px'}} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>                    
                    <Link to={`/details/${id}`}><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CategoryWiseCourse;