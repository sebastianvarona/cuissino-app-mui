import React from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import CreateButton from '../components/CreateButton';

export default function Expenses() {
  let rIndex = 0;
  let irrIndex = 0;

  // MENU DATA
  const expensesData = [
    {
      name: 'Water Service',
      value: 10500,
      fixed: false,
      regular: true,
      detail: '',
    },
    {
      name: 'Electricity and Energy Service',
      value: 1961,
      fixed: false,
      regular: true,
      detail: '',
    },
    {
      name: 'Gas Service',
      value: 2100,
      fixed: false,
      regular: true,
      detail: '',
    },
    {
      name: 'Phone Service',
      value: 10500,
      fixed: true,
      regular: true,
      detail: '',
    },
    {
      name: 'Internet Service',
      value: 1961,
      fixed: true,
      regular: true,
      detail: '',
    },

    {
      name: 'New paint',
      value: 1961,
      fixed: false,
      regular: false,
      detail: 'Painted all the kitchen',
    },
    {
      name: 'Changed chairs',
      value: 2100,
      fixed: false,
      regular: false,
      detail: 'Changed old wood chairs for new plastic chairs',
    },
    {
      name: 'Broken lightbulb',
      value: 10500,
      fixed: false,
      regular: false,
      detail: 'Changed the entry broken lightbulb',
    },
  ];
  const regularExpensesElements = expensesData.map((e) => {
    if (e.regular) {
      rIndex += 1;
      return (
        <tr
          key={rIndex}
          className={`${
            e.rIndex ? 'bg-green-400/25' : ''
          } hover:bg-gray-100 dark:hover:bg-gray-700`}
          id={rIndex}
        >
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
            {rIndex}
          </td>
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
            {e.name}
          </td>
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4 text-gray-500 dark:text-gray-400 text-sm">
            {e.detail === '' ? '-' : e.detail}
          </td>
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
            $ {e.value}
          </td>
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
            <span
              className={`w-[8px] h-[8px] rounded-full inline-block mr-2 ${
                e.fixed ? 'bg-blue-500' : ''
              }`}
            ></span>
            <span className={`inline-block font-medium`}>
              {e.fixed ? 'Yes' : 'No'}
            </span>
          </td>
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4  ">
            <div className={`flex gap-3`}>
              <button
                className={`h-7 w-7 flex justify-center items-center rounded-lg hover:bg-blue-400/25 group`}
              >
                <PencilAltIcon
                  className={`w-5 h-5 group-hover:stroke-blue-500`}
                />
              </button>
              <button
                className={`h-7 w-7 flex justify-center items-center rounded-lg hover:bg-red-400/25 group`}
              >
                <TrashIcon className={`w-5 h-5 group-hover:stroke-red-500`} />
              </button>
            </div>
          </td>
        </tr>
      );
    }
    return null;
  });
  const iregularExpensesElements = expensesData.map((e) => {
    if (!e.regular) {
      irrIndex += 1;
      return (
        <tr
          key={irrIndex}
          className={`${
            e.irrIndex ? 'bg-green-400/25' : ''
          } hover:bg-gray-100 dark:hover:bg-gray-700`}
          id={irrIndex}
        >
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
            {irrIndex}
          </td>
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
            {e.name}
          </td>
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4 text-gray-500 dark:text-gray-400 text-sm">
            {e.detail === '' ? '-' : e.detail}
          </td>
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
            $ {e.value}
          </td>
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4  ">
            <div className={`flex gap-3`}>
              <button
                className={`h-7 w-7 flex justify-center items-center rounded-lg hover:bg-blue-400/25 group`}
              >
                <PencilAltIcon
                  className={`w-5 h-5 group-hover:stroke-blue-500`}
                />
              </button>
              <button
                className={`h-7 w-7 flex justify-center items-center rounded-lg hover:bg-red-400/25 group`}
              >
                <TrashIcon className={`w-5 h-5 group-hover:stroke-red-500`} />
              </button>
            </div>
          </td>
        </tr>
      );
    }
    return null;
  });

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Expenses</h1>
      <div className={`grid grid-cols-2 gap-6`}>
        {/* Monthly expenses */}
        <div>
          <div className={`shadow-customL dark:shadow-customD rounded-2xl`}>
            <h2 className="text-xl font-bold text-center py-4">
              Monthly expenses
            </h2>

            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    #
                  </th>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    Name
                  </th>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    Detail
                  </th>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4">
                    Value
                  </th>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-l">
                    Fixed
                  </th>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-l">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{regularExpensesElements}</tbody>
            </table>
          </div>
          <div className={`flex justify-center mt-6`}>
            <CreateButton color="blue" text="Add monthly expense" />
          </div>
        </div>
        {/* Irregular expenses */}
        <div>
          <div className={`shadow-customL dark:shadow-customD rounded-2xl`}>
            <h2 className="text-xl font-bold text-center py-4">
              Irregular expenses
            </h2>
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    #
                  </th>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    Name
                  </th>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    Detail
                  </th>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4">
                    Value
                  </th>
                  <th className="border-y border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-l">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{iregularExpensesElements}</tbody>
            </table>
          </div>
          <div className={`flex justify-center mt-6`}>
            <CreateButton color="orange" text="Add expense" />
          </div>
        </div>
      </div>
    </>
  );
}
