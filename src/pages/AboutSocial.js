import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const AboutSocial = () => {
    return (
        <div className='d-flex flex-column align-items-center flex-lg-row gap-4 p-4'>
            <div>
                <img width='400px' src="https://astonishing-sprinkles-4c4f79.netlify.app/images/working.png" alt="" />
            </div>
            <div>
                <h2>
                    Explore The elearning Institute
                </h2>
                <p className='text-justify text-gray'>
                    Why you can joning us ? can you do this ? is it necessary for you ? all answer will clear here. Our stronge communite helps you to take decision .I hope here is your all confusion will be clear our social media follwers day by day incresinge so why are not ? if you thing we are the right person than come here and joning us .
                </p>
                <p className='text-justify text-gray'>
                    We insure that our learning system is very good if you face any problem go to group just post your problem and get solve it within a mintue. Now chooice is yours we are waiting for you .
                </p>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h3>3.2K </h3>
                        <p className='text-gray'>Online Student</p>
                    </div>
                    <div>
                        <h3>118.2K </h3>
                        <p className='text-gray'>Online Fellower's</p>
                    </div>
                    <div>
                        <h3>2.2K </h3>
                        <p className='text-gray'>Ratings and Review</p>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
                    <h4 className='text-dark'> Follow Us</h4>
                    <div className='d-flex gap-4'>
                        <div>
                            <FaFacebook className="text-primary" />
                        </div>
                        <div>
                            <FaYoutube className="text-primary" />
                        </div>
                        <div>
                            <FaTwitter className="text-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSocial;