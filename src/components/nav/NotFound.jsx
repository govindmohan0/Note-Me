import React from 'react';
import Example from '../Example';
import Not from '../../assets/404Error.json';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="w-64 h-64 max-w-full max-h-96">
        <Example animationData={Not} className="py-10 w-full h-full" />
      </div>
      <div className="text-center mt-8">
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-3xl font-semibold text-gray-700 mb-2">Oops! Page Not Found</p>
        <p className="text-lg text-gray-500 mb-6">The page you’re looking for doesn’t exist or has been moved.</p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;
