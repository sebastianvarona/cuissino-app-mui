import React, { useState } from 'react';
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { DatePicker } from '@material-ui/pickers';

export default function RangeDropdown({ calendar }) {
  const [openRange, setOpenRange] = useState(false);
  const [range, setRange] = useState('This week');
  const [showMonthC, setShowMonthC] = useState(false);
  // "Today"
  const [selectedMonth, handleMonthChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  // "One year ago"
  const [selectedStartDate, handleStartDateChange] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() - 1))
  );
  // "Today"
  const [selectedEndDate, handleEndDateChange] = useState(new Date());

  return (
    <div className="relative z-20">
      <button
        onClick={() => {
          setOpenRange(!openRange);
          setShowCalendar(false);
          setShowMonthC(false);
        }}
        className={`bg-blue-400/25 hover:bg-blue-600/25 text-blue-500 transition py-2 px-4 rounded-xl font-semibold flex items-center gap-2 relative`}
      >
        <CalendarIcon className="w-5 h-5" />
        {range}
        <ChevronDownIcon className="w-4  h-4 " />
      </button>

      <div
        className={`absolute top-[50px] right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-customL dark:shadow-customD flex flex-col overflow-hidden ${
          openRange ? '' : 'hidden'
        }`}
      >
        <button
          onClick={() => {
            setRange('This week');
            setOpenRange(false);
          }}
          className={`px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-gray-600 dark:text-gray-300`}
        >
          This week
        </button>
        <button
          onClick={() => {
            setRange('This month');
            setOpenRange(false);
          }}
          className={`px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-gray-600 dark:text-gray-300`}
        >
          This month
        </button>
        <button
          onClick={() => {
            setRange('Select month');
            setOpenRange(false);
            setShowMonthC(true);
          }}
          className={`px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-gray-600 dark:text-gray-300 ${
            calendar ? '' : 'hidden'
          }`}
        >
          Select month
        </button>
        <button
          onClick={() => {
            setRange('Select range...');
            setOpenRange(false);
            setShowCalendar(true);
          }}
          className={`px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-gray-600 dark:text-gray-300 ${
            calendar ? '' : 'hidden'
          }`}
        >
          Select range...
        </button>
      </div>
      <div
        className={`absolute top-[50px] right-0  bg-white dark:bg-gray-800 border w-[140px] p-4 border-gray-300 dark:border-gray-700 rounded-2xl shadow-customL dark:shadow-customD flex flex-col overflow-hidden ${
          showMonthC ? '' : 'hidden'
        }`}
      >
        {/* KEYBOARD DATE PICKERS */}
        <div className="flex justify-end gap-4">
          <DatePicker
            disableFuture
            openTo="month"
            format="MM/yyyy"
            label="Month"
            views={['year', 'month']}
            value={selectedMonth}
            onChange={handleMonthChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              setShowMonthC(false);
            }}
            className="bg-green-400/25 hover:bg-green-600/25 transition rounded-lg py-1 px-12 mt-4 font-medium text-green-500"
          >
            Ok
          </button>
        </div>
      </div>
      <div
        className={`absolute top-[50px] right-0  bg-white dark:bg-gray-800 border w-[250px] p-4 border-gray-300 dark:border-gray-700 rounded-2xl shadow-customL dark:shadow-customD flex flex-col overflow-hidden ${
          showCalendar ? '' : 'hidden'
        }`}
      >
        {/* KEYBOARD DATE PICKERS */}
        <div className="flex justify-end gap-4">
          <DatePicker
            disableFuture
            openTo="month"
            format="dd/MM/yyyy"
            label="Start date"
            views={['year', 'month', 'date']}
            value={selectedStartDate}
            onChange={handleStartDateChange}
          />
          <DatePicker
            disableFuture
            openTo="month"
            format="dd/MM/yyyy"
            label="End date"
            views={['year', 'month', 'date']}
            value={selectedEndDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              setShowCalendar(false);
            }}
            className="bg-green-400/25 hover:bg-green-600/25 transition rounded-lg py-1 px-12 mt-4 font-medium text-green-500"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
