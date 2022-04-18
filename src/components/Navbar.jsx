import React from 'react';
import {
  MoonIcon,
  SunIcon,
  TranslateIcon,
  UserIcon,
} from '@heroicons/react/outline';

export default function Navbar() {
  const Theme = () => {
    if (document.documentElement.classList.contains('dark')) {
      return <MoonIcon className={`w-6 h-6`} />;
    } else {
      return <SunIcon className={`w-6 h-6`} />;
    }
  };

  const toggleTheme = () => {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  };

  return (
    <nav className="bg-[255,255,255,0.7] bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(21,28,35,0.7)] fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded h-24 flex z-30">
      <div className="flex flex-wrap justify-end items-center w-full mx-10 self-center">
        <div className="flex items-center md:order-2 gap-6">
          {/* light/ dark mode */}
          <button
            onClick={toggleTheme}
            class="hover:bg-gray-200 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 rounded-full p-2 inline-flex items-center dark:hover:bg-[rgba(255,255,255,0.1)] transition"
            type="button"
          >
            <Theme />
          </button>

          {/* lang dropdown */}
          <button
            id="dropdownLang"
            data-dropdown-toggle="dropdown"
            class="hover:bg-gray-200 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400  rounded-full p-2 inline-flex items-center dark:hover:bg-[rgba(255,255,255,0.1)] transition"
            type="button"
          >
            <TranslateIcon className={`w-6 h-6`} />
          </button>

          {/* lang dropdown menu*/}
          <div
            id="dropdown"
            class="hidden z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-customL dark:shadow-customD overflow-hidden"
          >
            <ul
              class="text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownLang"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-base"
                >
                  Español
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-base"
                >
                  English
                </a>
              </li>
            </ul>
          </div>

          {/* user dropdown */}
          <button
            type="button"
            className="hover:bg-gray-200 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400  rounded-full p-2 inline-flex items-center dark:hover:bg-[rgba(255,255,255,0.1)] transition"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="userDropdown"
          >
            <span className="sr-only">Open user menu</span>
            <UserIcon className={`w-6 h-6`} />
          </button>
          {/* user dropdown menu */}
          <div
            className="hidden z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-customL dark:shadow-customD overflow-hidden"
            id="userDropdown"
          >
            <div className="py-3 px-4">
              <span className="block text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block font-medium text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-1" aria-labelledby="dropdown">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
