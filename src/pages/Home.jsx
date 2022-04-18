import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import DatePOne from '../components/DatePOne';

export default function Home() {
  return (
    <>
      <div className={`flex justify-between items-center`}>
        <h1 className="text-4xl font-bold mb-8">Quick Options</h1>
        <div className={`flex gap-4 items-center`}>
          <DatePOne />
          <button
            className={`p-2 rounded-full bg-blue-400/25 hover:bg-blue-600/25 transition relative`}
          >
            <SearchIcon className="w-5 h-5 stroke-blue-500 hover:stroke-blue-600 transition" />
          </button>
        </div>
      </div>
      <div className={``}>
        <div
          className={`shadow-customL dark:shadow-customD rounded-2xl max-w-md`}
        >
          <button
            className={`w-full flex justify-center items-center rounded-2xl py-32 font-semibold text-5xl bg-green-400/25 hover:bg-green-600/25 transition`}
          >
            Add Order
          </button>
        </div>
      </div>
    </>
  );
}
