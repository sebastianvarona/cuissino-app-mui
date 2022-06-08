import React, { useState, useEffect } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { PencilAltIcon, TrashIcon, SearchIcon } from '@heroicons/react/outline';
import CreateButton from '../components/CreateButton';
import Modal from '../components/Modal';
import { getOrders } from '../functions/orders';

export default function Orders() {
  const [showModal, setShowModal] = useState(false);
  // "Today"
  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [ordersData, setOrdersData] = useState(null);
  // MENU DATA
  useEffect(() => {
    getOrders(setOrdersData, '');
  }, []);

  return (
    <>
      <div className={`flex justify-between items-center`}>
        <h1 className="text-4xl font-bold mb-8">Orders</h1>
        <div className={`flex gap-4 items-center`}>
          <DatePicker
            disableFuture
            openTo="month"
            format="MM/yyyy"
            label="Select month"
            views={['year', 'month']}
            value={selectedStartDate}
            onChange={handleStartDateChange}
          />
          <button
            className={`p-2 rounded-full bg-blue-400/25 hover:bg-blue-600/25 transition relative`}
          >
            <SearchIcon className="w-5 h-5 stroke-blue-500 hover:stroke-blue-600 transition" />
          </button>
        </div>
      </div>
      <div className={`shadow-customL dark:shadow-customD rounded-2xl`}>
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                #
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                ID
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                # Items
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                Total ($)
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                Status
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                Date
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersData == null ? (
              <tr
                className={`hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400/60`}
              >
                <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                  1
                </td>
                <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                  01G4S2RNJ5VRJW2ESXJFGVZZSR
                </td>
                <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                  4
                </td>
                <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                  100000
                </td>
                <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                  completed
                </td>
                <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                  2022-06-03
                </td>
                <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4 ">
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
                      <TrashIcon
                        className={`w-5 h-5 group-hover:stroke-red-500`}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              ordersData.map((e, index) => {
                return (
                  <tr
                    key={e.id}
                    className={`hover:bg-gray-100 dark:hover:bg-gray-700`}
                    id={e.id}
                  >
                    <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                      {index + 1}
                    </td>
                    <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                      {e.id}
                    </td>
                    <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                      {e.itemsAmount}
                    </td>
                    <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                      {e.total}
                    </td>
                    <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                      {e.status}
                    </td>
                    <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4">
                      {e.date.split('T')[0].replaceAll('-', '/')}
                    </td>
                    <td className="border-t border-gray-100 dark:border-gray-800 py-2 px-4 ">
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
                          <TrashIcon
                            className={`w-5 h-5 group-hover:stroke-red-500`}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <CreateButton
          setShowModal={setShowModal}
          color="green"
          text="Add order"
        />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <h1 className={`text-4xl mb-6 font-semibold`}>New Order</h1>
          <div>
            <div className="px-4 grid grid-cols-2 grid-flow-row gap-x-6">
              {/* Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="order-name"
                  className="mb-1 text-lg font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="order-name"
                  id="order-name"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              {/* Quantity */}
              <div className="flex flex-col">
                <label
                  htmlFor="order-name"
                  className="mb-1 text-lg font-semibold"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  name="order-quantity"
                  id="order-quantity"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              {/* Cost */}
              <div className="flex flex-col">
                <label
                  htmlFor="order-name"
                  className="mb-1 text-lg font-semibold"
                >
                  Cost
                </label>
                <input
                  type="text"
                  name="order-cost"
                  id="order-cost"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              {/* Supplier */}
              <div className="flex flex-col">
                <label
                  htmlFor="order-name"
                  className="mb-1 text-lg font-semibold"
                >
                  Supplier
                </label>
                <input
                  type="text"
                  name="order-supplier"
                  id="order-supplier"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-7 mb-6  dark:bg-gray-700`}
                />
              </div>
              {/* Description */}
              <div className="col-span-2 flex flex-col">
                <label
                  htmlFor="order-name"
                  className="mb-1 text-lg font-semibold"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  name="order-description"
                  id="order-description"
                  className={`rounded border-gray-200 dark:border-gray-500 text-sm h-20 mb-6  dark:bg-gray-700`}
                />
              </div>
              <div className="col-span-2 flex justify-center">
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
