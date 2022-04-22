import React from 'react';

export default function DisplayIcon({ icon }) {
  if (icon === 'trending-up') {
    return (
      <svg
        className="w-8 h-8 stroke-[#4ca8ff]"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        ></path>
      </svg>
    );
  } else if (icon === 'dollar-sign') {
    return (
      <svg
        className="w-8 h-8 stroke-[#26b86e]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    );
  } else if (icon === 'trending-down') {
    return (
      <svg
        className="w-8 h-8 stroke-[#eb5c68]"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        ></path>
      </svg>
    );
  } else if (icon === 'plus') {
    return (
      <svg
        className="w-8 h-8 stroke-[#26b86e]"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
      </svg>
    );
  } else if (icon === 'minus') {
    return (
      <svg
        className="w-8 h-8 stroke-[#fd683e]"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20 12H4"
        ></path>
      </svg>
    );
  }
}
