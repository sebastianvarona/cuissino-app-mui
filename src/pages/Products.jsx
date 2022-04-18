import React from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';

export default function Products() {
  // MENU DATA
  const productsData = [
    { name: 'Malcolm ', price: 10500, orders: 200 },
    { name: 'The Sliding Mr. Bones', price: 1961, orders: 134 },
    { name: 'Shining Star', price: 2100, orders: 400 },
    { name: 'Malcolm Lockyer', price: 10500, orders: 200 },
    { name: 'The Sliding Mr. Bones', price: 1961, orders: 134 },
    { name: 'Malcolm Lockyer', price: 10500, orders: 200 },
    { name: 'The Sliding Mr. Bones', price: 1961, orders: 134 },
    { name: 'Shining Star', price: 2100, orders: 400 },
    { name: 'The Sliding Mr. Bones', price: 1961, orders: 134 },
    { name: 'Shining', price: 2100, orders: 400 },
    { name: 'Malcolm Lockyer', price: 10500, orders: 200 },
    { name: 'Shining Star', price: 2100, orders: 400 },
  ];
  let cont = 0;
  const productsElements = productsData.map((e) => {
    cont += 1;
    return (
      <tr
        key={cont}
        className={`hover:bg-gray-100 dark:hover:bg-gray-700`}
        id={cont}
      >
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          {cont}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          {e.name}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          $ {e.price}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          {e.orders}
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
      <h1 className="text-4xl font-bold mb-8">Products</h1>
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
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4">
                Price
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-l">
                Inventory
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-l">
                Actions
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
      Add product
    </button>
  );
};
