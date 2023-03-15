import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex justify-between bg-black text-white h-[50px] items-center px-[50px]'>

      <div>
        <h1>Simple Logo</h1>
      </div>

      <div className=' '>
        <Link to='/'> Home</Link>
        <Link to='/about'> About</Link>
        <Link to='/contact'> Contact</Link>
      </div>


    </div>
  )
}

export default NavBar