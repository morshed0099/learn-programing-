import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryWiseCourse from './CategoryWiseCourse';

const AllCourse = () => {
    const allCourse =useLoaderData();
    return (
        <div className='mb-4'>
             {
                <CategoryWiseCourse allCourse={allCourse} 
                key={allCourse.id}></CategoryWiseCourse>
             }
             <Link  to='/course'>All Courses</Link>
        </div>
    );
};

export default AllCourse;