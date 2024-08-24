import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon from react-icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for mobile menu

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // Track active link

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 px-4 bg-black text-gray-900 shadow-lg z-20 transition-transform duration-600 ${
        scrollingUp ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center h-full'>
        {/* Logo */}
        <div className='text-2xl font-bold'>
          <Link to='/' className='text-white' onClick={() => handleLinkClick('home')}>
            Note Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white text-2xl'
          onClick={toggleMenu}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex-row md:flex gap-x-4 items-center absolute md:static top-16 left-0 w-full bg-black md:bg-transparent md:w-auto transition-transform duration-600 ${
            menuOpen ? 'flex' : 'hidden'
          } md:flex`}
        >
          {userLoggedIn ? (
            <>
             <Link
                to='/flashcard-ai'
                className={`text-lg font-semibold transition duration-400 ${
                  activeLink === 'onlinecompiler' ? 'text-indigo-600' : 'text-white'
                } hover:text-indigo-600`}
                onClick={() => handleLinkClick('onlinecompiler')}
              >
               FlashCard-AI
              </Link>
              <Link
                to='/onlinecompiler'
                className={`text-lg font-semibold transition duration-400 ${
                  activeLink === 'onlinecompiler' ? 'text-indigo-600' : 'text-white'
                } hover:text-indigo-600`}
                onClick={() => handleLinkClick('onlinecompiler')}
              >
                Online Compiler
              </Link>
              <Link
                to='/contactus'
                className={`text-lg font-semibold transition duration-400 ${
                  activeLink === 'contactus' ? 'text-indigo-600' : 'text-white'
                } hover:text-indigo-600`}
                onClick={() => handleLinkClick('contactus')}
              >
                Contact Us
              </Link>
              <Link
                to='/aboutus'
                className={`text-lg font-semibold transition duration-400 ${
                  activeLink === 'aboutus' ? 'text-indigo-600' : 'text-white'
                } hover:text-indigo-600`}
                onClick={() => handleLinkClick('aboutus')}
              >
                About Us
              </Link>
              <Link
                to='/contribute'
                className={`text-lg font-semibold transition duration-400 ${
                  activeLink === 'contribute' ? 'text-indigo-600' : 'text-white'
                } hover:text-indigo-600`}
                onClick={() => handleLinkClick('contribute')}
              >
                Contribute
              </Link>
              <div className='ml-auto'>
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate('/login');
                    });
                  }}
                  className='text-white hover:text-indigo-600 transition duration-400 flex items-center'
                >
                  <FaSignOutAlt className="mr-2 h-5 w-4 text-gray-400"/>
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                className={`text-lg font-semibold transition duration-400 ${
                  activeLink === 'login' ? 'text-indigo-600' : 'text-white'
                } hover:text-indigo-600`}
                to='/login'
                onClick={() => handleLinkClick('login')}
              >
                Login
              </Link>
              <Link
                className={`text-lg font-semibold transition duration-400 ${
                  activeLink === 'register' ? 'text-indigo-600' : 'text-white'
                } hover:text-indigo-600`}
                to='/register'
                onClick={() => handleLinkClick('register')}
              >
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
