import React from 'react';

export default function CardTwo({ title, style, children }) {
  return (
    <div
      className={`flex-1 shadow-customL dark:shadow-customD rounded-2xl flex flex-col p-6 overflow-hidden ${style}`}
    >
      <h5
        className={`font-semibold text-3xl ${
          title !== undefined ? 'mb-6' : ''
        }`}
      >
        {title}
      </h5>
      <div className={`flex flex-col h-full justify-between`}>{children}</div>
    </div>
  );
}
