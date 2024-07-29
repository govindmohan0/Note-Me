import React from 'react';
import Lottie from 'lottie-react';
import Study from '../assets/study1.json';

const Example = () => {
  return (
    <div className='w-full'>
      <Lottie className='w-5/6 h-full' animationData={Study} />
    </div>
  );
}

export default Example;
