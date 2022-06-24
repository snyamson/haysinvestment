import React from 'react';

const Loader = () => {
  return (
    <div id="ftco-loader" className="show fullscreen">
      <svg className="circular" width="48px" height="48px">
        <circle
          className="path-bg"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          stroke="#026161"
        />
        <circle
          className="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#8BC53F"
        />
      </svg>
    </div>
  );
};

export default Loader;
