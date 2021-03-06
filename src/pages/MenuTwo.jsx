import React, { useState, useEffect } from 'react';
import {
  PencilAltIcon,
  TrashIcon,
  PlusIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline';
import Modal from '../components/Modal';
import CreateButton from '../components/CreateButton';
import { getMenus } from '../functions/menus';

export default function MenuTwo({ businessId }) {
  const [showModal, setShowModal] = useState(false);
  const [showModalCat, setShowModalCat] = useState(false);
  const [category, setCategory] = useState('');
  const [menus, setMenus] = useState([]);
  const [menusList, setMenusList] = useState([]);
  useEffect(() => {
    getMenus(setMenus, setMenusList, setCategory);
  }, []);
  console.log(menus, menusList);
  const CategoriesElements = () => {
    return (
      <ul className="flex flex-wrap gap-2 mb-4 font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {menus.map((e, index) => {
          return (
            <li key={e.id}>
              <button
                onClick={() => {
                  setCategory(e);
                }}
                className={`inline-block py-1 px-2 rounded-2xl capitalize transition ${
                  category === e
                    ? 'text-blue-500 font-medium bg-blue-400/25 hover:bg-blue-600/25'
                    : 'hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                }`}
              >
                {e}
              </button>
            </li>
          );
        })}
        <li className="relative">
          <button
            onClick={() => {
              setShowModalCat(true);
            }}
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
        <Modal showModal={showModalCat} setShowModal={setShowModalCat}>
          <h1 className={`text-4xl mb-6 font-semibold`}>New category</h1>
          <div className="w-96">
            <div className="px-4 flex flex-col">
              <label
                htmlFor="category-name"
                className="mb-1 text-lg font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                name="category-name"
                id="category-name"
                className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
              />
            </div>
            <div className="px-4 text-right sm:px-6 flex justify-center">
              <button
                type="submit"
                className="inline-flex font-bold justify-center py-2 px-6 border border-transparent shadow-sm rounded-md text-white bg-green-400 hover:bg-green-500 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
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
            <tbody>{menuElementsOrganizer(category, menusList)}</tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        <CreateButton
          setShowModal={setShowModal}
          color="blue"
          text="Add menu"
        />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <h1 className={`text-4xl mb-6 font-semibold`}>
            New menu{' '}
            <span className="capitalize text-3xl text-gray-500 dark:text-gray-400">
              ({category})
            </span>
          </h1>
          <div className="w-96">
            <div className="px-4 flex flex-col">
              <label htmlFor="menu-name" className="mb-1 text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                name="menu-name"
                id="menu-name"
                className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
              />
              <label
                htmlFor="menu-price"
                className="mb-1 text-lg font-semibold"
              >
                Price ($)
              </label>
              <input
                name="menu-price"
                id="menu-price"
                type="text"
                className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
              />
              <input
                type="hidden"
                name="menu-category"
                id="menu-category"
                value={category}
              />
            </div>
            <div className="px-4 text-right sm:px-6 flex justify-center">
              <button
                type="submit"
                className="inline-flex font-bold justify-center py-2 px-6 border border-transparent shadow-sm rounded-md text-white bg-green-400 hover:bg-green-500 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

const menuElementsOrganizer = (category, arr) => {
  let index = 0;
  let m = arr.map((e) => {
    if (e.category == category) {
      index += 1;
      return (
        <tr
          key={index}
          className={`hover:bg-gray-100 dark:hover:bg-gray-700`}
          id={index}
        >
          <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
            {index}
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
    } else {
      if (index !== 0) index -= 1;
    }
  });
  return m;
};
