import React from 'react';
import buble from '../assests/image/buble.png'

const Testomonial = () => {
    return (
        <div className='row'>
            <div  data-aos="fade-right" className='col-md-6 col-lg-4'>
                <div className='position-relative main-testimonial mb-5'>
                    <div className='d-flex justify-content-center '>
                        <img src={buble} width="280px" alt="" />
                        <div className='position-absolute' >
                            <img className='rounded-pill d-flex justify-content-center' width="200px" src="https://th.bing.com/th/id/OIP.Ks_A_2nNfkBfWSvHe06y5AAAAA?pid=ImgDet&w=400&h=400&rs=1" alt="" />
                            <div className='ms-5 mt-4 d-title'>
                                <h4>Barbara</h4>
                                <p>Sr.Developer</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='details-testomonial'>
                        <h4>Mr. JR. HOWEL</h4>
                        <p>Sr.Developer</p>
                        <p className=' '>
                            hi.. i am senior Developer.
                            I have experience working with google.
                            I am your mentor. I will tech you as friend.
                            you can share your any weaknes i will try my best to solve it ... thank you
                        </p>
                    </div> */}

                </div>


            </div>
            <div  data-aos="fade-up"   className='col-md-6 col-lg-4'>
                <div className='position-relative main-testimonial mb-5'>
                    <div className='d-flex justify-content-center '>
                        <img src={buble} width="280px" alt="" />
                        <div className='position-absolute' >
                            <img className='rounded-pill d-flex justify-content-center' width="200px" src="https://th.bing.com/th/id/OIP.KzkBiXQOWPs6ZAdnoLuS4wHaHa?pid=ImgDet&rs=1" alt="" />
                            <div className='ms-5 mt-4 d-title'>
                                <h4>Katy Perry</h4>
                                <p>Social Trainer</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='details-testomonial'>
                        <h4>Mr. JR. HOWEL</h4>
                        <p>Sr.Developer</p>
                        <p className=' '>
                            hi.. i am senior Developer.
                            I have experience working with google.
                            I am your mentor. I will tech you as friend.
                            you can share your any weaknes i will try my best to solve it ... thank you
                        </p>
                    </div> */}

                </div>


            </div>
            <div  data-aos="fade-left" className='col-md-6 col-lg-4'>
                <div className='position-relative main-testimonial mb-5'>
                    <div className='d-flex justify-content-center '>
                        <img src={buble} width="280px" alt="" />
                        <div className='position-absolute' >
                            <img className='rounded-pill d-flex justify-content-center' width="200px" src="https://th.bing.com/th/id/OIP.d7wZ_ny1kMUoetTY6C5LnAHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
                            <div className='ms-5 mt-4 d-title'>
                                <h4>Mr. JR. HOWEL</h4>
                                <p>Sr.Developer</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='details-testomonial'>
                        <h4>Mr. JR. HOWEL</h4>
                        <p>Sr.Developer</p>
                        <p className=' '>
                            hi.. i am senior Developer.
                            I have experience working with google.
                            I am your mentor. I will tech you as friend.
                            you can share your any weaknes i will try my best to solve it ... thank you
                        </p>
                    </div> */}

                </div>


            </div>



        </div>
    );
};

export default Testomonial;