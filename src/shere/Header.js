
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
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

      <Navbar bg="light" className="shadow mb-4 position-sticky top-0" expand="lg">
        <Container >
          <Link to='/'>
            <Navbar.Brand href="#"><ComputerDesktopIcon
              style={{ width: '40px', height: '40px' }}
              className="text-primary me-2"
            /> Learn Programing</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
           <ScrollToTop>
           <Nav className='ms-auto '>

<Link to='/course' className='me-4 mt-2'>Course</Link>
<Link className='me-4 mt-2' to='/blog'>Blogs</Link>
<Link className='me-4 mt-2' to='/'>Home</Link>
<Link className='me-4 mt-2' to='/faq'>FAQ</Link>


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
      <Link className='me-4 mt-2' to='/login'>Login</Link>
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