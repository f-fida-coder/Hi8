import React from 'react';

const MobileAuthButtons = () => {
  return (
    <div className="flex md:hidden w-full mt-2">
      <button className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all">
        Login
      </button>
      <button className="flex-1 bg-gradient-to-r from-blue-800 to-blue-600 text-white py-3 font-semibold hover:from-blue-600 hover:to-blue-700 transition-all">
        Join Now
      </button>
    </div>
  );
};

export default MobileAuthButtons;
