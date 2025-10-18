import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='mt-7'>
            <h1 className='font-semibold'>Find Us On</h1>
            <div className='*:border-1 *:border-gray-200 *:rounded-sm p-2'>
                <div className='w-full flex justify-start items-center gap-1 p-1'><FaFacebook />Facebook</div>
            <div className='flex justify-start items-center gap-1 p-1'><FaTwitter />Twitter</div>
            <div className='flex justify-start items-center gap-1 p-1'><FaInstagramSquare />Instragram</div>
            </div>
        </div>
    );
};

export default FindUs;