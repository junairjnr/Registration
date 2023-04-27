import React, { useState } from 'react'
import Reg from '../Img/regimg.png'

const Header = () => {

    const [isMenu, setIsMenu] = useState(false)
  return (
      <header className=' fixed z-50 w-screen  p-3 px-8 md:p-6 md:px-16 bg-primary'>
        <div className='hidden md:flex h-full w-full items-center justify-between'>
        <img src={Reg} className="w-8 object-cover cursor-pointer" alt="logo" />
          <p className="text-headingColor text-xl font-bold cursor-pointer">Reg</p>
        </div>
    </header>
  )
}

export default Header
