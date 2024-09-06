import React from 'react';
import Example from '../Illustrator';
import UnderProgress from '../../assets/Up.json';

const DAA = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* For larger screens (md and up) */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <Example animationData={UnderProgress} />
      </div>

      {/* For smaller screens (below md) */}
      <div className="flex md:hidden w-full justify-center">
        <Example animationData={UnderProgress} />
      </div>
    </div>
  );
};

export default DAA;
