import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 px-4 bg-white text-gray-900 shadow-lg z-20 transition-transform duration-300 ${
        scrollingUp ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center h-full'>
        {/* Logo */}
        <div className='text-2xl font-bold'>
          <Link to='/' className='hover:text-indigo-600 transition duration-400'>
            Note Me
          </Link>
        </div>

        {/* Navigation Links */}
        <div className='flex gap-x-4 items-center'>
          {userLoggedIn ? (
            // Links for logged-in users
            <>
            <Link to='/onlinecompiler' className='text-sm font-bold hover:text-indigo-600 transition duration-400'>
                Online Compiler
              </Link>
              <Link to='/contactus' className='text-sm font-bold hover:text-indigo-600 transition duration-400'>
                Contact Us
              </Link>
              <Link to='/aboutus' className='text-sm font-bold hover:text-indigo-600 transition duration-400'>
                About Us
              </Link>
              <Link to='/contribute' className='text-sm font-bold hover:text-indigo-600 transition duration-400'>
                Contribute
              </Link>
              <div className='ml-auto'>
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate('/login');
                    });
                  }}
                  className='text-sm font-bold hover:text-indigo-600 transition duration-400'
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            // Links for non-logged-in users
            <>
              <Link className='text-sm font-semibold hover:text-indigo-600 transition duration-400' to='/login'>
                Login
              </Link>
              <Link className='text-sm font-semibold hover:text-indigo-600 transition duration-300' to='/register'>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
