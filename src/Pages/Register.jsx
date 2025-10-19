import React, { use} from 'react';
import { Link } from 'react-router';
import AuthContext from '../Provider/AuthContext';

const Register = () => {
  const {createUser,setUser}=use(AuthContext)

  const handleregister=(e)=>{
   e.preventDefault();
   const name=e.target.name.value;
   const photo=e.target.photo.value;
   const email=e.target.email.value;
   const password=e.target.password.value;
   createUser(email,password)
   .then(res=>{
   setUser(res.user)
   alert('Succesfully Created An Account')
   })
   .catch(error=>{
    alert(error.message);
   })
  
}
    return (
        <div className='flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleregister} className="card-body">
        <h1 className='text-center text-2xl font-semibold mb-4'>Register Your Account</h1>
        <label className="label">Name</label>
          <input required type="text" name='name' className="input" placeholder="Your Name" />
          <label className="label">Photo Url</label>
          <input required type="text" name='photo' className="input" placeholder="Your Photo" />
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input required type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input required type="password" name='password' className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <h1 className='text-center text-[15px]'>Alrady have an accont?<span  className='text-red-500 hover:border-b-1'> <Link to={'/auth/login'}>Login</Link></span></h1>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;