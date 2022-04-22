import React, { useState } from 'react';
import CardTwo from '../components/CardTwo';
import Modal from '../components/Modal';

const menuData = [
  { name: 'The Sliding Mr. Bones', category: 'pasta' },
  { name: 'Malcolm Lockyer', category: 'pasta' },
  { name: 'Shining Star', category: 'pasta' },
  { name: 'Malcolm Lockyer', category: 'soups' },
  { name: 'Shining Star', category: 'soups' },
  { name: 'The Sliding Mr. Bones', category: 'soups' },
  { name: 'Malcolm Lockyer', category: 'soups' },
  { name: 'The Sliding Mr. Bones', category: 'soups' },
  { name: 'Malcolm ', category: 'desserts' },
  { name: 'The Sliding Mr. Bones', category: 'desserts' },
  { name: 'Shining', category: 'desserts' },
  { name: 'Shining Star', category: 'desserts' },
];

const productsData = [
  { name: 'Malcolm ' },
  { name: 'The Sliding Mr. Bones' },
  { name: 'Shining Star' },
  { name: 'Malcolm Lockyer' },
  { name: 'The Sliding Mr. Bones' },
  { name: 'Malcolm Lockyer' },
  { name: 'The Sliding Mr. Bones' },
  { name: 'Shining Star' },
  { name: 'The Sliding Mr. Bones' },
  { name: 'Shining' },
  { name: 'Malcolm Lockyer' },
  { name: 'Shining Star' },
];

export default function Home() {
  return (
    <>
      <div className={`flex justify-between items-center`}>
        <h1 className="text-6xl font-bold mb-8">Welcome User</h1>
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
