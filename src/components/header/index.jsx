// Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <nav className='flex flex-row justify-between items-center w-full fixed top-0 left-0 h-12 px-4 bg-transparent text-gray-900 shadow-lg z-20'>
      <div className='text-xl font-bold'>
        <Link to='/home' className='hover:text-indigo-600 transition duration-400'>
          Note Me
        </Link>
      </div>
      <div className='flex gap-x-4 items-center'>
        {userLoggedIn ? (
          <>
            <Link to='/contactus' className='text-sm font-semibold hover:text-indigo-600 transition duration-400'>
              Contact Us
            </Link>
            <Link to='/about' className='text-sm font-semibold hover:text-indigo-600 transition duration-400'>
              About Us
            </Link>
            <Link to='/contribute' className='text-sm font-semibold hover:text-indigo-600 transition duration-400'>
              Contribute
            </Link>
            <div className='ml-auto'>
              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate('/login');
                  });
                }}
                className='text-sm font-semibold hover:text-indigo-600 transition duration-400'
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link
              className='text-sm font-semibold hover:text-indigo-600 transition duration-400'
              to='/login'
            >
              Login
            </Link>
            <Link
              className='text-sm font-semibold hover:text-indigo-600 transition duration-300'
              to='/register'
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
