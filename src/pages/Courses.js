import React from 'react';
import { useLoaderData } from 'react-router-dom';

import CategoryWiseCourse from '../shere/CategoryWiseCourse';


const Courses = () => {
    const courses =useLoaderData()
        console.log(courses,"fad");
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