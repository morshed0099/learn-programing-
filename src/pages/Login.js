import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuth } from '../AuthProvider';
import { FaGithub } from 'react-icons/fa';
import { ArrowRightIcon } from '@heroicons/react/24/solid';




const Login = () => {
    const Swal = require('sweetalert2');
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { logInWithEmail, createUserGoogle, createUserGithub } = useContext(userAuth)
    const handelSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log('login18', user);
                Swal.fire(
                    'Good job!',
                    'login success!',
                    'success'
                )
                form.reset()
                navigate(from, { replace: true });
            }).catch(error => {
                console.error('error', error)
                const massage = error.message
                Swal.fire({
                    title: 'Error!',
                    text: massage,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })

            })
    }
    const hadelGooleLogin = () => {
        createUserGoogle()
            .then(result => {
                const user = result.user;
                console.log('login27', user);
                Swal.fire(
                    'Good job!',
                    'login success!',
                    'success'
                )
                navigate(from, { replace: true });
            }).catch(error => {
                console.error('error', error);
                const massage = error.message
                Swal.fire({
                    title: 'Error!',
                    text: massage,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })

            })
    }
    const handelGitLogin = () => {
        createUserGithub()
            .then(result => {
                const user = result.user;
                console.log('login37', user)
                Swal.fire(
                    'Good job!',
                    'login success!',
                    'success'
                )
                navigate(from, { replace: true });
            }).catch(error => {
                console.error('error', error);
                const massage = error.message
                Swal.fire({
                    title: 'Error!',
                    text: massage,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }


    return (
        <div >

            <Container>
                <div style={{ maxWidth: "400PX" }} className="border w-75 mx-auto  rounded-3 shadow p-3 mt-3 rounded-lg">
                    <Form onSubmit={handelSubmit}>
                        <div className='d-flex justify-content-center'>
                            <img width='100px' src="https://th.bing.com/th/id/OIP.BN_aorK8Rz6oWuo6sU2tFAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.1&pid=1.7" className='rounded-pill' alt="" />
                        </div>
                        <h2 className='text-center mb-3'>Login form </h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>

                        <button className='btn btn-outline-primary fw-bold fs-5  w-100'>Login</button>
                        {/* <Button className="w-100" variant="primary" type="submit">
                        <ArrowRightIcon className='text-light me-2' style={{ width: '30px', height: '30px' }} />   Login
                    </Button> */}
                        <p className='fw-bold fs-6 text-center text-danger mt-3'>-----------OR-----------</p>


                    </Form>
                    <div className='d-flex gap-3 justify-content-center align-items-center'>
                        <button onClick={hadelGooleLogin}
                            className="rounded-pill mt-1 p-2">
                            <img width="50px" src="https://th.bing.com/th?id=OIP.r9Cr_8crKTgOifBDM-za7wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />

                        </button>
                        <button className='rounded-pill' onClick={handelGitLogin}>
                            <img width="65px" src="https://www.bing.com/th?id=OIP.s8xc5XnB9aMTne1V-30nJgHaHa&pid=3.1&cb=&w=300&h=300&p=0" alt="" />
                        </button>
                    </div>
                    <div className='d-flex justify-content-center mt-2'>
                        <Link className='text-decoration-none ' to='/resetpassword'>Forget password ? </Link>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <Link className='text-decoration-none' to='/signup'>Are You New ? <span className='text-danger fw-bold'>Register First</span> </Link>
                    </div>
                </div>

            </Container>

        </div>
    );
};

export default Login;