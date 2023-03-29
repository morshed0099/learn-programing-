import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CategoryWiseCourse from '../shere/CategoryWiseCourse';
import Loading from './Loading';




const Courses = () => {
    const [loading, setLoading] = useState(true);   
    const courses = useLoaderData();
    const navigation = useNavigation();
    
    if (navigation.state === 'loading') {
        return <Loading />
    }    
    // if(loading){
    //     return <Loading />
    // }

    // if(courses.length){
    //     console.log(courses,"line 22");
    //     setLoading(false)
    // }

    return (

        <div>
            {
                courses ? 
                courses.map((allcourse, idx) => <CategoryWiseCourse
                    key={idx}
                    allCourse={allcourse}
                >
                </CategoryWiseCourse>):<Loading />
            }

        </div>



    );
};

export default Courses;