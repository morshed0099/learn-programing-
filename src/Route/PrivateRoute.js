import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from '../AuthProvider';

const PrivateRoute = ({children}) => {
    const location =useLocation();
    const {user,loader}=useContext(userAuth)
     if(loader){
       return alert('okey');
     }
    if(!user?.uid){      
      return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;