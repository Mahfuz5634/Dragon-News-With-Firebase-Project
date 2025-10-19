import React, { use } from 'react';
import { Link } from 'react-router';
import AuthContext from '../Provider/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const {auth}=use(AuthContext)
  const handlelogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      alert("Login Succesfull")
      e.target.reset();
    })
    .catch(error=>{
      alert(error);
    })
  }
    return (
        <div className='flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlelogin} className="card-body">
        <h1 className='text-center text-2xl font-semibold mb-4'>Login Your Account</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <h1 className='text-center'>Don't have an accont?<span  className='text-red-500 hover:border-b-1'> <Link to={'/auth/register'}>Register</Link></span></h1>
      </form>
    </div>
        </div>
    );
};

export default Login;