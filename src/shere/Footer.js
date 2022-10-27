import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <Row className='bg-dark text-light mt-3 p-3 text-center'>
                <Col lg='4'>
                    <h3>Learn Programing</h3>
                    <p>Elephant Road</p>
                    <p>1205,Dhanmondi</p>
                    <p>Dhaka</p>
                    <p>Bangladesh</p>
                </Col>
                <Col lg='4'>
                    <h3>
                        Quick Link
                    </h3>
                  
                       <p><Link to='/course'>course</Link></p>
                       <p><Link to='/'>home</Link></p> 
                        <p><Link to='/faq'>FAQ</Link></p>
                        <p><Link to='/blog'>Blogs</Link></p>
                    
                </Col>
                <Col lg='4'>
                    <h2>Follow us</h2>
                    <FaFacebook className='fs-2 me-2'/> <FaTwitter className='fs-2 me-2'/> <FaYoutube className='fs-2 me-2'/>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;