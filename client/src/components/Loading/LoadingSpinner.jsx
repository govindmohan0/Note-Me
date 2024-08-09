import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const LoadingSpinner = ({ loading }) => {
  return (
    loading && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-zinc-950 z-50">
        <PropagateLoader
          color={'#3758ed'}
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  );
};

export default LoadingSpinner;
