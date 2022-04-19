import React, { useState } from "react";
import CardTwo from "../components/CardTwo";

const menuData = [
  { name: "The Sliding Mr. Bones", category: "pasta" },
  { name: "Malcolm Lockyer", category: "pasta" },
  { name: "Shining Star", category: "pasta" },
  { name: "Malcolm Lockyer", category: "soups" },
  { name: "Shining Star", category: "soups" },
  { name: "The Sliding Mr. Bones", category: "soups" },
  { name: "Malcolm Lockyer", category: "soups" },
  { name: "The Sliding Mr. Bones", category: "soups" },
  { name: "Malcolm ", category: "desserts" },
  { name: "The Sliding Mr. Bones", category: "desserts" },
  { name: "Shining", category: "desserts" },
  { name: "Shining Star", category: "desserts" },
];

const productsData = [
  { name: "Malcolm " },
  { name: "The Sliding Mr. Bones" },
  { name: "Shining Star" },
  { name: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones" },
  { name: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones" },
  { name: "Shining Star" },
  { name: "The Sliding Mr. Bones" },
  { name: "Shining" },
  { name: "Malcolm Lockyer" },
  { name: "Shining Star" },
];

export default function Checkout() {
  let mElements = menuElementsOrganizer(menuData);
  const [menuElements, setMenuElements] = useState(mElements);
  const [toggleTab, setToggleTab] = useState(false);
  let pElements = productsElements(productsData);
  let profit = 1000;

  return (
    <>
      <div className={`flex justify-between items-center`}>
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      </div>
      <div className={`grid grid-cols-5 gap-6`}>
        {/* SALE ITEMS */}
        <div
          className={`shadow-customL dark:shadow-customD rounded-2xl col-span-3 p-6`}
        >
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2 ">
                <button
                  onClick={() => {
                    setToggleTab(false);
                  }}
                  className={`inline-block p-4 rounded-t-lg border-b-2 ${
                    toggleTab
                      ? "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      : "text-blue-600  border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                  }`}
                >
                  Menus
                </button>
              </li>
              <li className="mr-2">
                <button
                  onClick={() => {
                    setToggleTab(true);
                  }}
                  className={`inline-block p-4 rounded-t-lg border-b-2 ${
                    !toggleTab
                      ? "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      : "text-blue-600  border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                  }`}
                  aria-current="page"
                >
                  Products
                </button>
              </li>
            </ul>
          </div>
          {/* MENU */}
          <div>
            <table
              className={`table-auto border-collapse w-full ${
                toggleTab ? "hidden" : ""
              }`}
            >
              <thead>
                <tr>
                  <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    #
                  </th>
                  <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    Name
                  </th>
                  <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>{menuElements}</tbody>
            </table>
            <table
              className={`table-auto border-collapse w-full ${
                toggleTab ? "" : "hidden"
              }`}
            >
              <thead>
                <tr>
                  <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    #
                  </th>
                  <th className="border-b border-gray-300 dark:border-gray-700 py-3 text-left px-4 border-r">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>{pElements}</tbody>
            </table>
          </div>
        </div>
        {/* CURRENT SALE */}
        <div className={`col-span-2`}>
          <CardTwo title="Current Sale">
            <p className={`text-lg font-medium text-blue-500`}>Total orders:</p>
            <div className="h-[1px] bg-gray-300 dark:bg-gray-700"></div>
            <ul className={`w-full`}>
              <li className={`text-lg font-medium`}>
                <span className="font-medium text-2xl mr-2 text-red-500">
                  -
                </span>{" "}
                Tax (Included)
              </li>
            </ul>
            <div className="h-[1px] bg-gray-300 dark:bg-gray-700"></div>
            <p
              className={`text-lg font-medium ${
                profit <= 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              Total profit: {profit}
            </p>
          </CardTwo>
        </div>
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
          {e.category}
        </td>
      </tr>
    );
  });
  return m;
};

const productsElements = (arr) => {
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
      </tr>
    );
  });
  return m;
};
