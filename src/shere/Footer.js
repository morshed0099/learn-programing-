import React from 'react';
import { FaFacebook, FaLaptop, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer-hero  mt-5'>
            <div className='opacity-75'
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backgroundColor: "black",

                }}
            ></div>

            <div className='d-flex pt-lg-5 pt-md-5 pt-3 mt-md-5 mt-md-5 mt-3 flex-md-row flex-column justify-content-evenly align-items-center' style={{
                position: "absolute",
                color: "white",
                width: "100%"
            }}>
                <div className=''>
                    <FaLaptop style={{
                        fontSize: "40px",
                        color: "green"
                    }} />
                    <h2>Learn Programming</h2>
                    <p>New Palton , Dhaka-1205</p>
                    <p>Email : fakeemail@gamil.com</p>
                </div>
                <div>
                    <h2 className='text-center'>
                        Quick Link
                    </h2>
                    <div className='text-center'>
                        <Link className='text-decoration-none me-3 fw-bold fs-5' to='/home'>Home</Link>
                        <Link className='text-decoration-none me-3 fw-bold fs-5' to='/courses'>Coures</Link>
                        <Link className='text-decoration-none me-3 fw-bold fs-5' to='/blogs'>Blogs</Link>
                    </div>
                    <div>
                        <span> &copy; All Right Rreserved Learn Programming</span>
                    </div>
                </div>
                <div>
                    <h2 >
                        Follow Us
                    </h2>
                    <div >
                        <a className='text-decoration-none me-3 fw-bold fs-3' href='https://www.facebook.com/morshed0099'><FaFacebook /> </a>
                        <a className='text-decoration-none me-3 fw-bold fs-3' href='https://www.facebook.com/'><FaTwitter /> </a>
                        <a className='text-decoration-none me-3 fw-bold fs-3' href='https://facebook.com'><FaYoutube /></a>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Footer;