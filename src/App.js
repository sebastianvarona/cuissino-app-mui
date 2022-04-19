import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Analytics from './pages/Analytics';
import Menu from './pages/Menu';
import MenuTwo from './pages/MenuTwo';
import Inventory from './pages/Inventory';
import Expenses from './pages/Expenses';
import Staff from './pages/Staff';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/menu" element={<MenuTwo />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}
