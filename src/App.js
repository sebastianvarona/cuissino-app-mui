import React from 'react'
import BasicDatePicker from './components/DatePickerC';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {
  const lang = 'es';
  return (
    <div className="App">
      <Navbar />
      <main className="min-h-screen flex justify-end">
        <Sidebar />
        <div id="main-content" className="p-6 md:p-12 w-[calc(100%-5rem)] md:w-[calc(100%-16rem)] lg:w-[calc(100%-18rem)]">
            <div className="h-12"></div>
            <div className="h-3"></div>
            <h1>Hola mundo</h1>
        </div>
    </main>
    </div>
  );
}
