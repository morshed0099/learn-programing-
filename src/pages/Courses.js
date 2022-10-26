import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryWiseCourse from '../shere/CategoryWiseCourse';


const Courses = () => {
    const courses =useLoaderData();    
    return (
        <div>           
           {
            courses.map((allcourse,idx) =><CategoryWiseCourse
            key={idx}
            allCourse={allcourse}
            >
            </CategoryWiseCourse>)
           }
        </div>
    );
};

export default Courses;