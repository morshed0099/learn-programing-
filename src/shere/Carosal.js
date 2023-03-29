import Carousel from 'react-bootstrap/Carousel';

const Carosal = () => {
    return (
        <div className=' p'>
            <Carousel fade>
                <Carousel.Item>
                    <div className='position-relative'>
                        <div className='position-absolute opacity-75 imgbg bg-dark'></div>
                        <div className='position-absolute content'>
                            <h2 className='text-white '>Just Enroll and Follow Instruction</h2>
                            <p>We Will Change Your Future</p>
                            <button className='btn btn-primary'>Join Now</button>
                        </div>
                        <img
                            className=" w-100"
                            src="https://th.bing.com/th?id=ORMS.2a67f8bf5d9ba6f715f568bcc47554b4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
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
                            <button className='btn btn-primary'>Join Now</button>
                        </div>
                        <img
                            className=" w-100"
                            src="https://th.bing.com/th?id=ORMS.2a67f8bf5d9ba6f715f568bcc47554b4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
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
                            <button className='btn btn-primary'>Join Now</button>
                        </div>
                        <img
                            className=" w-100"
                            src="https://th.bing.com/th?id=ORMS.2a67f8bf5d9ba6f715f568bcc47554b4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                            alt="Third slide"
                        />
                    </div>

                    
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carosal;