import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BeakerIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">Learn Programing</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className='ms-auto '>    
          
            <Link to='/' className='me-4 mt-2'>Home</Link>
            <Link className='me-4 mt-2' to='/login'>Login</Link>
            <Link className='me-4 mt-2' to='/signup'>SignUp</Link>
            <Link className='me-4 mt-2' to='/blog'>Blogs</Link>
            <Link className='me-4 mt-2' to='/coures'>Coures</Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;