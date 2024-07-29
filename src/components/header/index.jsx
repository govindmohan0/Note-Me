import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (
        <nav className='flex flex-row justify-between items-center w-full fixed top-0 left-0 h-10 px-4 bg-gray-900 text-white shadow-lg z-20'>
            <div className='text-lg font-semibold'>
                <Link to='/' className='hover:text-indigo-600 transition duration-400'>Note Me</Link>
            </div>
            <div className='flex gap-x-4'>
                {userLoggedIn ? (
                    <button 
                        onClick={() => { doSignOut().then(() => { navigate('/login') }) }} 
                        className='text-sm hover:text-indigo-600 transition duration-400'
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <Link 
                            className='text-sm hover:text-indigo-600 transition duration-400' 
                            to='/login'
                        >
                            Login
                        </Link>
                        <Link 
                            className='text-sm hover:text-indigo-600 transition duration-300' 
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
