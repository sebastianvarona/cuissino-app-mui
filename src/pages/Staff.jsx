import React, { useState } from 'react';
import {
  PencilAltIcon,
  TrashIcon,
  CheckIcon,
  XIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from '@heroicons/react/outline';
import Modal from '../components/Modal';

export default function Staff() {
  const [showModal, setShowModal] = useState(false);
  const [carouselPosition, setCarouselPosition] = useState('1');
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
        <CreateButton setShowModal={setShowModal} />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <h1 className={`text-4xl mb-6 font-semibold`}>New Employee</h1>

          {/* Carousel 1 */}
          <div className={carouselPosition === '1' ? '' : 'hidden'}>
            <div className="px-4 grid grid-cols-2 grid-flow-row gap-x-6">
              {/* First Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="fn-employee"
                  className="mb-1 text-gray-500 dark:text-gray-400 font-semibold"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="fn-employee"
                  id="fn-employee"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="ln-employee"
                  className="mb-1 text-gray-500 dark:text-gray-400 font-semibold"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="ln-employee"
                  id="ln-employee"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              <div className="col-span-2 h-[1px] bg-gray-300 dark:bg-gray-600 my-2"></div>
              <div className="col-span-2 my-4">
                <h2 className="font-semibold text-xl mb-3">
                  Payment information
                </h2>
              </div>
              {/* Pay type */}
              <div className="flex flex-col">
                <label
                  htmlFor="paytype-employee"
                  className="mb-1 text-gray-500 dark:text-gray-400 font-semibold"
                >
                  Pay Type
                </label>
                <input
                  type="text"
                  name="paytype-employee"
                  id="paytype-employee"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              {/* Hourly rate */}
              <div className="flex flex-col">
                <label
                  htmlFor="hr-employee"
                  className="mb-1 text-gray-500 dark:text-gray-400 font-semibold"
                >
                  Hourly rate ($)
                </label>
                <input
                  type="text"
                  name="hr-employee"
                  id="hr-employee"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700 placeholder:text-gray-400`}
                  placeholder={'0.00'}
                />
              </div>
              <div className="col-span-2 flex justify-end">
                <button
                  onClick={() => {
                    setCarouselPosition('2');
                  }}
                  className="inline-flex font-bold justify-center py-2 px-6 border border-transparent shadow-sm rounded-full text-white bg-gray-400 hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <ArrowRightIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel 2 */}
          <div className={carouselPosition === '1' ? 'hidden' : ''}>
            <div className="px-4 grid grid-cols-2 grid-flow-row gap-x-6">
              {/* Role */}
              <div className="flex flex-col">
                <label
                  htmlFor="role-employee"
                  className="mb-1 text-gray-500 dark:text-gray-400 font-semibold"
                >
                  Role
                </label>
                <input
                  type="text"
                  name="role-employee"
                  id="role-employee"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              {/* Access */}
              <div className="flex flex-col">
                <label
                  htmlFor="access-employee"
                  className="mb-1 text-gray-500 dark:text-gray-400 font-semibold"
                >
                  Access
                </label>
                <input
                  type="text"
                  name="access-employee"
                  id="access-employee"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              <div className="col-span-2 h-[1px] bg-gray-300 dark:bg-gray-600 my-2"></div>
              <div className="col-span-2 my-4">
                <h2 className="font-semibold text-xl mb-3">Point of Sale</h2>
              </div>
              {/* POS Passcode */}
              <div className="flex flex-col">
                <label
                  htmlFor="pos-passcode-employee"
                  className="mb-1 text-gray-500 dark:text-gray-400 font-semibold"
                >
                  POS Passcode
                </label>
                <input
                  type="text"
                  name="pos-passcode-employee"
                  id="pos-passcode-employee"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              {/* Login User */}
              <div className="flex flex-col">
                <label
                  htmlFor="user-employee"
                  className="mb-1 text-gray-500 dark:text-gray-400 font-semibold"
                >
                  Login User
                </label>
                <input
                  type="text"
                  name="user-employee"
                  id="user-employee"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700 placeholder:text-gray-400`}
                />
              </div>
              <div className="flex justify-start">
                <button
                  onClick={() => {
                    setCarouselPosition('1');
                  }}
                  className="inline-flex font-bold justify-center py-2 px-6 border border-transparent shadow-sm rounded-full text-white bg-gray-400 hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <ArrowLeftIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex font-bold justify-center py-2 px-6 border border-transparent shadow-sm rounded-md text-white bg-green-400 hover:bg-green-500 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
const CreateButton = (props) => {
  return (
    <button
      onClick={() => props.setShowModal(true)}
      className={`bg-green-400/25 hover:bg-green-600/25 text-green-500 transition py-2 px-4 rounded-xl font-semibold`}
    >
      Add employee
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
