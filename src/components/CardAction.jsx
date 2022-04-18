import React from 'react';

export default function CardAction({ title, style, children }) {
  return (
    <div
      className={`cursor-pointer flex-1 shadow-customL dark:shadow-customD rounded-2xl flex max-h-16 min-w-min justify-center items-center p-2 overflow-hidden transition pr-6 ${style}`}
    >
      <span className={`flex rounded-full p-2 items-center`}>{children}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}
