import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className=''>
            <h1 className='font-semibold mb-2'>Login With</h1>
          <div><SocialLogin></SocialLogin></div>
          <div><FindUs></FindUs></div>
          <div><Qzone></Qzone></div>
        </div>
    );
};

export default RightAside;