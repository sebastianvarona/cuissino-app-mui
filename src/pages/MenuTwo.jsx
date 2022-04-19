import React, { useState } from 'react';
import { PencilAltIcon, TrashIcon, PlusIcon } from '@heroicons/react/outline';

let menuData = [
  { name: 'The Sliding Mr. Bones', price: 1961, category: 'pastas' },
  { name: 'Malcolm Lockyer', price: 10500, category: 'pastas' },
  { name: 'Shining Star', price: 2100, category: 'pastas' },
  { name: 'Malcolm Lockyer', price: 10500, category: 'soups' },
  { name: 'Shining Star', price: 2100, category: 'soups' },
  { name: 'The Sliding Mr. Bones', price: 1961, category: 'soups' },
  { name: 'Malcolm Lockyer', price: 10500, category: 'soups' },
  { name: 'The Sliding Mr. Bones', price: 1961, category: 'soups' },
  { name: 'Malcolm ', price: 10500, category: 'desserts' },
  { name: 'The Sliding Mr. Bones', price: 1961, category: 'desserts' },
  { name: 'Shining', price: 2100, category: 'desserts' },
  { name: 'Shining Star', price: 2100, category: 'desserts' },
];

let categoriesData = ['pastas', 'soups', 'desserts'];
let displayMenuData = menuData;
displayMenuData = displayMenuData.filter((m) => {
  if (m.category === categoriesData[0]) {
    return m;
  }
});

export default function MenuTwo() {
  let mElements = menuElementsOrganizer(displayMenuData);
  const [menuElements, setMenuElements] = useState(mElements);
  const [category, setCategory] = useState(categoriesData[0]);
  const listEl = categoriesData.map((c, index) => {
    return (
      <li>
        <button
          key={index}
          onClick={() => {
            setCategory(c);
            displayMenuData = menuData;
            displayMenuData = displayMenuData.filter((m) => {
              if (m.category === c) {
                return m;
              }
            });
            mElements = menuElementsOrganizer(displayMenuData);

            setMenuElements(mElements);
          }}
          className={`inline-block py-1 px-2 rounded-2xl capitalize transition ${
            category === c
              ? 'text-blue-500 font-medium bg-blue-400/25 hover:bg-blue-600/25'
              : 'hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300'
          }`}
        >
          {c}
        </button>
      </li>
    );
  });

  const CategoriesElements = () => {
    return (
      <ul className="flex flex-wrap gap-2 mb-4 font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {listEl}
        <li className="relative">
          <button
            onMouseEnter={() => {
              const tooltip = document.getElementById('addCategory_tooltip');
              tooltip.classList.remove('invisible');
            }}
            onMouseLeave={() => {
              const tooltip = document.getElementById('addCategory_tooltip');
              tooltip.classList.add('invisible');
            }}
            className={`inline-block p-1 bg-green-400/25 hover:bg-green-600/25 rounded-full font-semibold text-green-500 transition`}
          >
            <PlusIcon className={`w-6 h-6`} />
          </button>
          <span
            id={'addCategory_tooltip'}
            className="absolute top-0 left-10 py-1 px-2 text-sm font-normal rounded-lg whitespace-nowrap invisible transition bg-gray-200 text-gray-600 dark:text-gray-400 dark:bg-gray-800"
          >
            Add category
          </span>
        </li>
      </ul>
    );
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Menu</h1>
      <div>
        <CategoriesElements />
        <div className={`shadow-customL dark:shadow-customD rounded-2xl`}>
          <table className={`table-auto border-collapse w-full`}>
            <thead>
              <tr>
                <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                  #
                </th>
                <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                  Name
                </th>
                <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                  Price
                </th>
                <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-l">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{menuElements}</tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        <CreateButton />
      </div>
    </>
  );
}

const menuElementsOrganizer = (arr) => {
  let m = arr.map((e, index) => {
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
          $ {e.price}
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
  return m;
};
const CreateButton = () => {
  return (
    <button
      className={`bg-green-400/25 hover:bg-green-600/25 text-green-500 transition py-2 px-4 rounded-xl font-semibold`}
    >
      Add menu
    </button>
  );
};
