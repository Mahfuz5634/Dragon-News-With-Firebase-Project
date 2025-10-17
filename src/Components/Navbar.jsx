import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div  className='flex justify-between items-center'>
           <div className='flex-1'></div>
           <div className='nav flex justify-center items-center gap-3 flex-1 text-accent '>
             <NavLink to={'/'} className={({isActive})=>(isActive?'border-b-2':"")}>Home</NavLink>
             <NavLink to={'/about'} className={({isActive})=>(isActive?'border-b-2':"")}>About</NavLink>
             <NavLink to={'/Career'} className={({isActive})=>(isActive?'border-b-2':"")} >Career</NavLink>
           </div>
           <div className='login-btn flex justify-end items-end gap-3 flex-1'>
            
            <button className='btn btn-primary px-7 text-white'><CgProfile/>Login</button>
           </div>
        </div>
    );
};

export default Navbar;