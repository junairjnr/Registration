import React, { useState } from 'react'
import Reg from '../Img/regimg.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  // let Links = [
  //   {name: "Register", link:''},
  //   {name: "Login", link:''}
  // ]
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-blue-100 py-4 md:px-10 px-7'>
        <div>
          <span>
            <img src={Reg} className="w-24 object-cover cursor-pointer items-center" alt="logo" />
          </span>
        </div>
        <ul className='md:flex md:items-center '>
          {/* {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-3xl'>
                  <a href={link.link} className='text-gray-400 hover:text-gray-900 duration-500'>{link.name}</a>
              </li>
            ))
          } */}
          <Link to={'/register'}>
            <p onClick={() => {
              console.log('Register');
            }} className='md:ml-8 text-3xl text-gray-400 hover:text-gray-900 duration-500'>Register</p>
          </Link>
          <Link to='/login'>
            <p onClick={() => {
              console.log('Login');
            }} className='md:ml-8 text-3xl text-gray-400 hover:text-gray-900 duration-500'>Login</p>
          </Link>
          {/* <li  className='md:ml-8 text-3xl text-gray-400 hover:text-gray-900 duration-500'>Register</li> */}
          {/* <li className='md:ml-8 text-3xl text-gray-400 hover:text-gray-900 duration-500'>Login</li> */}
        </ul>

      </div>
    </div>
  )
}

export default Navbar
