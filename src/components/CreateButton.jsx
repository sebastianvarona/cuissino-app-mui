import React from 'react';

export default function CreateButton({ color, text, setShowModal }) {
  switch (color) {
    case 'green':
      return (
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className={`bg-green-400/25 hover:bg-green-600/25 text-green-500 transition py-2 px-4 rounded-xl font-semibold`}
        >
          {text}
        </button>
      );
    case 'blue':
      return (
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className={`bg-blue-400/25 hover:bg-blue-600/25 text-blue-500 transition py-2 px-4 rounded-xl font-semibold`}
        >
          {text}
        </button>
      );
    case 'orange':
      return (
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className={`bg-orange-400/25 hover:bg-orange-600/25 text-orange-500 transition py-2 px-4 rounded-xl font-semibold`}
        >
          {text}
        </button>
      );
  }

  return (
    <button
      onClick={() => {
        setShowModal(true);
      }}
      className={`bg-green-400/25 hover:bg-green-600/25 text-green-500 transition py-2 px-4 rounded-xl font-semibold`}
    >
      {text}
    </button>
  );
}
