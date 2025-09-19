import { useState } from 'react';

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div 
        className="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: `${progress}%` }}
      >
        {progress > 0 && `${progress}%`}
      </div>
    </div>
  );
};
export default ProgressBar;