import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='text-center text-2xl font-semibold mb-4'>Register Your Account</h1>
        <label className="label">Name</label>
          <input type="text" className="input" placeholder="Your Name" />
          <label className="label">Photo Url</label>
          <input type="text" className="input" placeholder="Your Photo" />
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <h1 className='text-center text-[15px]'>Alrady have an accont?<span  className='text-red-500 hover:border-b-1'> <Link to={'/auth/login'}>Login</Link></span></h1>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default Register;