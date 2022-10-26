import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { userAuth } from '../AuthProvider';
import Header from '../shere/Header';
import Swal from 'sweetalert2';

const SignUp = () => {
    const Swal =require('sweetalert2');
    const { createUserEmail } = useContext(userAuth)
    const handelSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const phoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUserEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log('login18', user);
                Swal.fire(
                    'Good job!',
                    'signUP success!',
                    'success'
                  )
                  form.reset()
            }).catch(error => {
                console.error('error', error);
                const massage=error.message           
                Swal.fire({
                    title: 'Error!',
                    text: massage,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
                
            })
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Form className="border w-75 mx-auto shadow p-3 mt-3 rounded-3" onSubmit={handelSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control name='photoURL' type="text" placeholder="Enter Your photo Url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter Your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" className='w-100' type="submit">
                        Sign Up
                    </Button>
                    <br />
                    <Link to='/login'>Alredy You Have an Accaunt ?<span className='text-danger'>login</span>  </Link>
                </Form>
            </Container>
        </div>
    );
};

export default SignUp;