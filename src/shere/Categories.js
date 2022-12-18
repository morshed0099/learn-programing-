import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [cat,setCat]=useState([]);

    useEffect(()=>{
        fetch('https://learn-programin-server.vercel.app/category')
        .then(res=>res.json())
        .then(data=>setCat(data));
    },[])
   console.log(cat);
    return (
        <div style={{position:'sticky',top:"95px"}}>
            <h4>All Category</h4>
              {
                cat.map(category=><p key={category.id}>
                    <Link to={`/details/${category.id}`}><Button className='w-100' variant='primary'> {category.category_name}</Button></Link>
                </p>)
              }
            
        </div>
    );
};

export default Categories;