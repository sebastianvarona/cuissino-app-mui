import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const lang = 'es';
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [hoverSidebar, setHoverSidebar] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <main className="min-h-screen flex justify-end">
        <Sidebar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          hoverSidebar={hoverSidebar}
          setHoverSidebar={setHoverSidebar}
        />
        <div
          id="main-content"
          className={`p-6 md:p-12 w-[calc(100%-5rem)] transition-all duration-300 ${
            toggleSidebar ? '' : 'xl:w-[calc(100%-250px)]'
          }`}
        >
          <div className="h-12"></div>
          <div className="h-3"></div>
          <div className="flex flex-col gap-6">{children}</div>
        </div>
      </main>
    </div>
  );
}
