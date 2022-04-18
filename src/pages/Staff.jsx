import React from 'react';
import {
  PencilAltIcon,
  TrashIcon,
  CheckIcon,
  XIcon,
} from '@heroicons/react/outline';

export default function Staff() {
  // MENU DATA
  const productsData = [
    {
      name: 'Juan Sebastian',
      home: 't',
      orders: 't',
      analytics: 't',
      menus: 't',
      products: 't',
      inventory: 't',
      expenses: 't',
      staff: 't',
    },
    {
      name: 'Ivan Alfonso',
      home: 'f',
      orders: 'f',
      analytics: 't',
      menus: 'f',
      products: 'f',
      inventory: 'f',
      expenses: 't',
      staff: 't',
    },
    {
      name: 'Isabella Zuluaga',
      home: 't',
      orders: 't',
      analytics: 'f',
      menus: 't',
      products: 't',
      inventory: 'f',
      expenses: 'f',
      staff: 'f',
    },
    {
      name: 'Jake Varona',
      home: 'f',
      orders: 'f',
      analytics: 'f',
      menus: 't',
      products: 't',
      inventory: 't',
      expenses: 't',
      staff: 't',
    },
  ];
  const productsElements = productsData.map((e, index) => {
    return (
      <tr
        key={index + 1}
        className={`hover:bg-gray-100 dark:hover:bg-gray-700`}
        id={index + 1}
      >
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          {index + 1}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          {e.name}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          <ShowIcon active={e.home} />
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          <ShowIcon active={e.orders} />
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          <ShowIcon active={e.analytics} />
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          <ShowIcon active={e.menus} />
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          <ShowIcon active={e.products} />
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          <ShowIcon active={e.inventory} />
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          <ShowIcon active={e.expenses} />
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          <ShowIcon active={e.staff} />
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
  });
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Users</h1>
      <div className={`shadow-customL dark:shadow-customD rounded-2xl`}>
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                #
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                Name
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                Home
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                Orders
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                Analytics
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                Menus
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                Products
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4">
                Inventory
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-l">
                Expenses
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-l">
                Staff
              </th>
            </tr>
          </thead>
          <tbody>{productsElements}</tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <CreateButton />
      </div>
    </>
  );
}
const CreateButton = () => {
  return (
    <button
      className={`bg-green-400/25 hover:bg-green-600/25 text-green-500 transition py-2 px-4 rounded-xl font-semibold`}
    >
      Add user
    </button>
  );
};

const ShowIcon = ({ active }) => {
  if (active === 't') {
    return <CheckIcon className={`w-5 h-5 text-green-500`} />;
  } else if (active === 'f') {
    return <XIcon className={`w-5 h-5 text-red-500`} />;
  } else {
    return 'undefined';
  }
};
