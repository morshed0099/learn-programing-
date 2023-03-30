
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { userAuth } from '../AuthProvider';
import ReactTooltip from 'react-tooltip';
import { ComputerDesktopIcon } from '@heroicons/react/24/solid'
import React from "react";

import ScrollToTop from '../Hooks/ScrollTop';

const Header = () => {

  const { user } = useContext(userAuth);
  console.log('header14', user);
  const { logoutEmail } = useContext(userAuth);

  const handelLogOut = () => {
    logoutEmail()
      .then(() => {

      }).catch(error => {
        console.error('error', error)
      })
  }

  return (
    <div className='position-sticky top-0' style={{ zIndex: '99' }}>  
      <Navbar bg="light" className="shadow mb-2 position-sticky top-0" expand="lg">
        <Container >
          <Navbar.Brand>
            <Link className='decoretion text-dark' to='/'>
              <ComputerDesktopIcon
                style={{ width: '40px', height: '40px' }}
                className="text-primary me-2"
              /> Learn Programing
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <ScrollToTop>
              <Nav className='ms-auto '>
                <NavLink style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "semi-bold" : "",
                    color: isActive ? "black" : " ",
                  };
                }}
                  className={`nav-links me-4 mt-2 text-decoration-none`
                  } to='/home'>Home</NavLink>
                <NavLink style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "semi-bold" : "",
                    color: isActive ? "black" : " ",
                  };
                }}
                  className={`nav-links me-4 mt-2 text-decoration-none`
                  } to='/myclass'>MyClass</NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "semi-bold" : "",
                      color: isActive ? "black" : " ",
                    };
                  }}
                  className={`nav-links me-4 mt-2 text-decoration-none`} to='/course'>Course</NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "semi-bold" : "",
                      color: isActive ? "black" : " ",
                    };
                  }}
                  className={`nav-links me-4 mt-2 text-decoration-none `} to='/blog'>Blog</NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "semi-bold" : "",
                      color: isActive ? "black" : " ",
                    };
                  }}
                  className={`nav-links me-4 mt-2 text-decoration-none `} to='/faq'>FAQ</NavLink>
                {
                  user?.uid ?
                    <>
                      <ReactTooltip
                      />
                      <Link to='/profile'>
                        <img src={user?.photoURL}
                          data-tip={user?.displayName}
                          className='rounded-circle me-2 mb-4 mb-lg-0'
                          style={{ width: '40px', height: '40px' }}
                          alt="" />
                      </Link>
                      <Button onClick={handelLogOut} className='me-2' varient='primary'>Log Out</Button>
                    </>
                    :
                    <>
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            fontWeight: isActive ? "semi-bold" : "",
                            color: isActive ? "black" : " ",
                          };
                        }}
                        className={`nav-links me-4 mt-2 text-decoration-none`} to='/login'>Login</NavLink>
                    </>
                }
              </Nav>
            </ScrollToTop>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>



  );
};

export default Header;