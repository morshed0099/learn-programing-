import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import { userAuth } from '../AuthProvider';


const PrivateRoute = ({children}) => {
    const location =useLocation();
    const {user,loader}=useContext(userAuth)
     if(loader){
       return <SpinnerDotted  style={{marginLeft:"20%"}} className='w-25 me-auto  mt-5'/>
     }
    if(!user?.uid){      
      return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;