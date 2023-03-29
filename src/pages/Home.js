import React, { useState } from 'react';
import { AcademicCapIcon, ChartBarIcon, ChatBubbleLeftRightIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid';
import { Container } from 'react-bootstrap';
import roket from '../assests/image/animation_500_ldsj2qjf.gif'
import { FaSchool, FaCertificate, FaLaptop } from 'react-icons/fa'
import { FcOnlineSupport } from 'react-icons/fc'
import { TbMathSymbols } from 'react-icons/tb'
import Carosal from '../shere/Carosal';
import Testomonial from './Testomonial';
import AboutSocial from './AboutSocial';
import { useNavigate } from 'react-router-dom';





const Home = () => {
    const [actvieRoute, setActiveRoute] = useState("join")
    const navigate = useNavigate()
    const handenRoute = () => {
        console.log('hellorhsalkasjlfjasf');
        navigate('/course');
    }

    return (
        <div>
            <Container>
                <div>
                    <Carosal />
                </div>
                <section className='commonQuestion bg-light shadow-lg mb-5 rounded'>
                    <div className='p-2 border rounded-pill mt-4 mb-4'>
                        <div className='d-flex p-2 justify-content-start align-items-center gap-2 borders '>
                            <button onClick={() => setActiveRoute('join')} className={`btn  btn-sm btn-outline-primary ${actvieRoute === "join" && "btn btn-primary text-white"}`}>WHO CAN JOIN</button>
                            <button onClick={() => setActiveRoute('shedule')} className={`btn btn-sm btn-outline-primary ${actvieRoute === "shedule" && "btn btn-primary text-white"}`}>CLASS SHEDULE</button>
                            <button onClick={() => setActiveRoute('benifit')} className={`btn btn-sm btn-outline-primary ${actvieRoute === "benifit" && "btn btn-primary text-white"}`}>BENIFIT</button>
                        </div>
                    </div>
                    <div className='p-4'>
                        {
                            actvieRoute === "join" &&
                            <div className='position-relative'>
                                <div className='backgorund-light'></div>
                                <p className='fs-4'>
                                    <span><FaSchool className='text-primary' /></span> <b>Education limitation</b>: <span className='text-gray'>12 Class StudenT can join.</span>
                                </p>
                                <p className='fs-4'>
                                    <span><TbMathSymbols className='text-primary' /></span> <b>Math</b> : <span className='text-gray'>Besic Math Experience needed.</span>
                                </p>
                                <p className='fs-4'>
                                    <span><FaLaptop className='text-primary' /></span> <b>Instoments</b> : <span className='text-gray'>Internet and Laptop,Headphone needed.</span>
                                </p>
                            </div>
                        }
                        {
                            actvieRoute === "shedule" &&
                            <div className='position-relative'>
                                <div className='backgorund-light'></div>
                                <p className='fs-4'>
                                    <span><FcOnlineSupport className='text-primary' /></span> <b>Suppet</b>: <span className='text-gray'> 24/7 Support.</span>
                                </p>
                                <p className='fs-4'>
                                    <span><TbMathSymbols className='text-primary' /></span> <b>Class</b> : <span className='text-gray'> EveryDay 8.00 AM to 10.AM.</span>
                                </p>
                                <p className='fs-4'>
                                    <span><FaLaptop className='text-primary' /></span> <b>Instoments</b> : <span className='text-gray'>Internet and Laptop,Headphone needed.</span>
                                </p>
                            </div>
                        }
                        {
                            actvieRoute === "benifit" &&
                            <div className='position-relative'>
                                <div className='backgorund-light'></div>
                                <p className='fs-4'>
                                    <span><FaCertificate className='text-primary' /></span> <b>Certificate</b>: <span className='text-gray' >We Provided World Class Certificate</span>.
                                </p>
                                <p className='fs-4'>
                                    <span><TbMathSymbols className='text-primary' /></span> <b>Job Plcement Team</b> : <span className='text-gray'>AfterCourses You Can Work with Job Plcement Team.</span>
                                </p>
                                <p className='fs-4'>
                                    <span><FaLaptop className='text-primary' /></span> <b>Instoments</b> : <span className='text-gray'>Besict math experience needed.</span>
                                </p>
                            </div>
                        }
                    </div>

                </section>
                <section>
                    <AboutSocial />
                </section>
                <section >
                    <div className="header-bannar position-relative">
                        <div className='backgorund-white'></div>
                        <svg class="backgroun-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0ffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>


                        <div className='text-center mt-4 mb-4'>
                            <h1 className='text-white bal fs-1 fw-bold lh-1'>Became a <span className='text-header'>Developer</span> To Get Dream Job</h1>
                            <p className='text-white  fs-5'>Wake up Join us</p>

                        </div>
                        <div className='row p-5 ms-5 '>
                            <div className=' IconSection  col-12 col-lg-6'>
                                <div className='row' >
                                    <div className='col-12 col-md-6'>
                                        <div>
                                            <span className='d-flex align-items-center me-2'>
                                                <ChartBarIcon style={{ width: "80px", height: "80px", color: "white" }} />
                                                <p className='text-white  fs-5'>First Growing </p>
                                            </span>
                                            <span className='d-flex align-items-center me-2'>
                                                <GlobeEuropeAfricaIcon style={{ width: "80px", height: "80px", color: "white" }} />
                                                <p className='text-white  fs-5'>Worldwide Chance</p>
                                            </span>
                                        </div>

                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <div>
                                            <span className='d-flex align-items-center'>
                                                <ChatBubbleLeftRightIcon style={{ width: "80px", height: "80px", color: "white" }} />
                                                <p className='text-white  fs-5 ms-2'>Unlimited Support</p>
                                            </span>
                                            <span className='d-flex align-items-center '>
                                                <AcademicCapIcon style={{ width: "80px", height: "80px", color: "white" }} />
                                                <p className='text-white  fs-5 ms-2'>Get Certificate</p>
                                            </span>
                                        </div>
                                    </div>

                                    <button onClick={handenRoute} style={{ width: '300px' }} className='px-5 mt-4 ms-2 ms-md-5 join-button shadow-lg py-2 rounded fs-4 fw-bold border-0'>Join Us</button>

                                </div>
                            </div>

                            <div className='col-12 col-lg-6'>
                                <img src={roket} alt="" />
                            </div>

                        </div>

                    </div>
                </section>
                <section>
                    <h2 className='text-center mt-5 mb-2'>Meet Our Team</h2>
                    <Testomonial />
                </section>

                {/* <section style={{
                    position: "relative",
                    backgroundImage: `url("https://th.bing.com/th/id/OIP.2fIWi9po22t63qXxltVYqwHaEK?pid=ImgDet&w=553&h=311&rs=1")`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    backgroundSize: "cover",
                    height: "60vh",
                }} className='more-info'>
                    <div className='overlay  position-absolute'></div>
                    <div className='image-text position-absolute'>
                        <div className="text-white text-center p-4">
                            <h4>Why You Join With Us</h4>
                            <p>Your journey will be very smooth.You will achive success</p>
                            <p>We Provide World Class Tutorial</p>
                            <p>Join us we care every student .We have stong team </p>

                        </div>
                    </div>

                </section> */}
            </Container>

        </div>
    );
};

export default Home;