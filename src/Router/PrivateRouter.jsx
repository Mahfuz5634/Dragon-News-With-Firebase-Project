import React, { Children, useContext } from 'react';
import AuthContext from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {User,loading}=useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <span className=" loading loading-spinner loading-xl flex justify-center items-center  "></span>;
       
    }

    if(User && User.email){
        return children;
    }
    else{
      return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
}

export default PrivateRouter;