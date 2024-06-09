import React from 'react';
import windie from '../assets/windie.gif';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img className="w-20 h-20" src={windie} alt="gif" />
      Loading....
    </div>
  );
}

export default Loader;
