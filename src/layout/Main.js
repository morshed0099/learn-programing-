import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Categories from '../shere/Categories';
import Footer from '../shere/Footer';
import Header from '../shere/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
             <Container>
                <Row>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='4'>
                       <Categories></Categories>
                    </Col>
                </Row>
             </Container>
             <Footer></Footer>
        </div>
    );
};

export default Main;