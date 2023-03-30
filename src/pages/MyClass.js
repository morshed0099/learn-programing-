import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy'

const MyClass = () => {
    const [video, setVideo] = useState('https://youtu.be/zsYMgmb2oCM?t=74')
    const handel = (e) => {
        setVideo(e.target.hreflang);
        document.documentElement.scrollTop = 0;
    }
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <ReactPlayer controls url={video} />
            </div>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>module 1</Accordion.Header>
                    <Accordion.Body>
                        <div className='d-flex flex-column'>
                            <div>
                                1.<Link onClick={(e) => handel(e)} hrefLang='https://youtu.be/PkZNo7MFNFg?list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V&t=6'>class one</Link>
                            </div>
                            <div>
                                2.<Link onClick={(e) => handel(e)} hrefLang='https://youtu.be/M576WGiDBdQ?t=3'>class two</Link>
                            </div>
                            
                        </div>
                    </Accordion.Body>
                </Accordion.Item>                
            </Accordion>
        </div>
    );
};

export default MyClass;