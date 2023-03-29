import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const Carosal = () => {
    const navigate=useNavigate()
    const handelJoinNow=()=>{
        navigate('/course')
    }
    return (
        <div className=' p'>
            <Carousel fade>
                <Carousel.Item>
                    <div className='position-relative'>
                        <div className='position-absolute opacity-75 imgbg bg-dark'></div>
                        <div className='position-absolute content'>
                            <h2 className='text-white '>Just Enroll and Follow Instruction</h2>
                            <p>We Will Change Your Future</p>
                            <button onClick={handelJoinNow} className='btn btn-primary'>Join Now</button>
                        </div>
                        <img
                            height='600px'
                            width="100%"
                            className='sliderImage' 
                            src="https://astonishing-sprinkles-4c4f79.netlify.app/images/cover/undergrad-hero-option-2.jpg"
                            alt="Third slide"
                        />
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div className='position-relative'>
                        <div className='position-absolute opacity-75 imgbg bg-dark'></div>
                        <div className='position-absolute content'>
                            <h2 className='text-white '>Learn With Us </h2>
                            <p>Do Something</p>
                            <button onClick={handelJoinNow} className='btn btn-primary'>Join Now</button>
                        </div>
                        <img
                            height='600px'
                            width="100%"
                            className='sliderImage'                            
                            src="https://astonishing-sprinkles-4c4f79.netlify.app/images/cover/cover-1.png"
                            alt="Third slide"
                        />
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div className='position-relative'>
                        <div className='position-absolute opacity-75 imgbg bg-dark'></div>
                        <div className='position-absolute content'>
                            <h2 className='text-white '>2023 You Don't Miss</h2>
                            <p>Became a Developer</p>
                            <button onClick={handelJoinNow} className='btn btn-primary'>Join Now</button>
                        </div>
                        <img
                            height='600px'
                            width="100%"
                            className='sliderImage' 
                            src="https://astonishing-sprinkles-4c4f79.netlify.app/images/cover/cover-3.jpg"
                            alt="Third slide"
                        />
                    </div>

                    
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carosal;