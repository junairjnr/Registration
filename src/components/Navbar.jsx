import Reg from '../Img/regimg.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-blue-100 py-4 md:px-10 px-7'>
        <div>
          <span>
            <img src={Reg} className="w-24 object-cover cursor-pointer items-center" alt="logo" />
          </span>
        </div>
        <ul className='md:flex md:items-center '>
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
        </ul>

      </div>
    </div>
  )
}

export default Navbar
