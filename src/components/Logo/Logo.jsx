import React from 'react';
import logo from '../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex items-end  text-3xl'>
            <img src={logo} alt="" />
            <h1 className='-ms-2.5 -mb-1 font-extrabold'>ZapShift</h1>
        </div>
    );
};

export default Logo;