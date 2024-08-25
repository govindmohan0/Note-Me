import React from 'react';
import Lottie from 'lottie-react';

const Example = ({ animationData }) => {
  return (
    <div className='w-full'>
      <Lottie className='w-5/6 h-full' animationData={animationData} />
    </div>
  );
}
export default Example;
