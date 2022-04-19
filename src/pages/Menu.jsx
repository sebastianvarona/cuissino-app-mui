import React, { useState } from 'react';
import {
  PencilAltIcon,
  TrashIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline';

const menuData = [
  { name: 'The Sliding Mr. Bones', price: 1961, category: 'pasta' },
  { name: 'Malcolm Lockyer', price: 10500, category: 'pasta' },
  { name: 'Shining Star', price: 2100, category: 'pasta' },
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
let displayMenuData = menuData;

export default function Menu() {
  let mElements = menuElementsOrganizer(displayMenuData);
  const [menuElements, setMenuElements] = useState(mElements);

  const CategoryDropdown = () => {
    const [openCategory, setOpenCategory] = useState(false);
    const [category, setCategory] = useState('Select category...');

    const categories = ['all'];
    menuData.forEach((e) => {
      if (!categories.includes(e.category)) {
        categories.push(e.category);
      }
    });

    const categoriesE = categories.map((e, index) => {
      return (
        <button
          key={index}
          onClick={() => {
            setCategory(e);
            setOpenCategory(false);
            displayMenuData = menuData;
            displayMenuData = displayMenuData.filter((m) => {
              if (e === 'all') {
                return m;
              }
              if (m.category === e) {
                return m;
              }
              return m;
            });
            mElements = menuElementsOrganizer(displayMenuData);

            setMenuElements(mElements);
          }}
          className={`px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-gray-600 dark:text-gray-300 capitalize`}
        >
          {e}
        </button>
      );
    });

    return (
      <div className="relative z-20">
        <button
          onClick={() => {
            setOpenCategory(!openCategory);
          }}
          className={`bg-blue-400/25 hover:bg-blue-600/25 text-blue-500 transition py-2 px-4 rounded-xl font-semibold flex items-center gap-2 relative`}
        >
          {category}
          <ChevronDownIcon className="w-4  h-4" />
        </button>

        <div
          className={`absolute top-[50px] right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-customL dark:shadow-customD flex flex-col overflow-hidden ${
            openCategory ? '' : 'hidden'
          }`}
        >
          {categoriesE}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`flex justify-between`}>
        <h1 className="text-4xl font-bold mb-8">Menus</h1>
        <CategoryDropdown />
      </div>
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
                Price
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4">
                Category
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-l">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{menuElements}</tbody>
        </table>
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
        <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
          {e.category}
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
