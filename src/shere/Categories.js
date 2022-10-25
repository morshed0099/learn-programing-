import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [cat,setCat]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCat(data));
    },[])
   console.log(cat);
    return (
        <div style={{position:'sticky',top:"90px"}}>
            <h4>All Category</h4>
              {
                cat.map(category=><p key={category.id}>
                    <Link to={`/course/${category.id}`}> {category.category_name}</Link>
                </p>)
              }
            
        </div>
    );
};

export default Categories;