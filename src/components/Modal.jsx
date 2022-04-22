import { XIcon } from '@heroicons/react/outline';
import React from 'react';

export default function Modal(props) {
  const handleClick = () => {
    props.setShowModal(false);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className={`absolute top-0 left-0 z-50 bg-black/50 w-screen h-screen flex flex-col items-center justify-center ${
          props.showModal ? '' : 'hidden'
        }`}
      ></div>

      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 shadow-customL dark:shadow-customD bg-white dark:bg-gray-800 rounded-2xl flex flex-col items-center p-10 overflow-hidden ${
          props.showModal ? '' : 'hidden'
        }`}
      >
        <div className={`absolute right-0 top-0 pt-3 pr-3`}>
          <button onClick={handleClick}>
            <XIcon
              className={`w-6 h-6 text-gray-400 dark:text-gray-600 hover:text-red-600 transition dark:hover:text-red-600`}
            />
          </button>
        </div>
        {props.children}
      </div>
    </>
  );
}
